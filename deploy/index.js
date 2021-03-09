const scpClient = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const server = require('./products')
const ssh2 = new (require('ssh2').Client)() // 版本新增
const compressing = require('compressing')

ssh2.on('ready', function() {
  console.log(chalk.green(`远程服务器连接成功....`))
  ssh2.shell(function(err, stream) {
    const cmd = `rm -rf ${server.path} \nexit\n`
    if (err) {
      console.log(chalk.red(`远程服务器连接失败....`))
      throw err
    }
    stream.on('close', async function() {
      await ssh2.end()
      console.log(chalk.green(`远程服务器连接关闭....`))
      await uploadFile()
      // await backups()
    }).on('data', function(data) {
      console.log(chalk.green('执行: ' + data))
    })
    stream.end(cmd)
  });
}).connect({
  host: server.host,
  port: server.port,
  username: server.username,
  password: server.password,
});

// upload you file
function uploadFile() {
  const spinner = ora('正在发布到' + server.name + '服务器...\n')
  spinner.start()
  scpClient.scp(
    server.assetsPath,
    {
      host: server.host,
      port: server.port,
      username: server.username,
      password: server.password,
      path: server.path
    },
    function (err) {
      spinner.stop()
      if (err) {
        console.log(chalk.red('发布失败.\n'))
        throw err
      } else {
        console.log(chalk.green('Success! 成功发布到' + server.name + '服务器! \n'))
      }
    }
  )
}

/**
 * copy you file to server
 */
function backups() {
  const spinnerCopy = ora('正在备份到' + server.name + '服务器...\n')
  spinnerCopy.start()
  console.log(chalk.green('\n正在生成压缩文件，请稍等! \n'))

  // 生成zip压缩包的名字（根据自己的需要自定义）
  const filePath = "./" + (new Date()).getTime() + server.assetsRoot.replace('./', '') + ".zip"
  compressing.zip
    .compressDir(server.assetsRoot, filePath)
    .then(() => {

      scpClient.scp(
        filePath,
        {
          host: server.host,
          port: server.port,
          username: server.username,
          password: server.password,
          path: server.path
        },
        function (err) {
          spinnerCopy.stop()
          if (err) {
            console.log(chalk.red('备份失败.\n'))
            throw err
          } else {
            console.log(chalk.green('Success! 成功备份到' + server.name + '服务器! \n'))
          }
        })
    }).catch(err => {
    console.error(err)
    spinnerCopy.stop()
    console.log(chalk.red('备份失败.\n'))
    throw err
  })
  return 'Success'
}
