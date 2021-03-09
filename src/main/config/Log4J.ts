import * as log4js from 'log4js'
const _config: log4js.Configuration = {
  pm2: true,
  appenders: {
    stdout: {//控制台输出
      type: 'console'
    },
    req: {  //请求转发日志
      type: 'dateFile',    //指定日志文件按时间打印
      filename: 'logs/reqLog/req',  //指定输出文件路径
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    err: {  //错误日志
      type: 'dateFile',
      filename: 'logs/errLog/err',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    oth: {  //其他日志
      type: 'dateFile',
      filename: 'logs/othLog/oth',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    dbErr: {
      type: 'dateFile',
      filename: 'logs/dbLog/err',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    //appenders:采用的appender,取appenders项,level:设置级别
    default: { appenders: ['stdout', 'req'], level: 'debug' },
    err: { appenders: ['stdout', 'err'], level: 'error' },
    dbErr: { appenders: ['stdout', 'dbErr'], level: 'debug' },
  }
}
log4js.configure(_config)

export function getLogger(name) {//name取categories项
  return log4js.getLogger(name || 'default')
}
//用来与express结合
export function useLogger(app, logger) {
  app.use(log4js.connectLogger(logger || log4js.getLogger('default'), {
//自定义输出格式
    format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'
  }))
}
