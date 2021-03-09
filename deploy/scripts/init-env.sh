#!/bin/bash
# 部署环境脚本
version=12.16.2
# 安装node环境
wget https://npm.taobao.org/mirrors/node/v${version}/node-v${version}-linux-x64.tar.xz
tar -xf node-v${version}-linux-x64.tar.xz
mkdir /usr/local/node
mv node-v${version}-linux-x64/ /usr/local/node/

# 配置系统全局变量
ln -s /usr/local/node/node-v${version}-linux-x64/bin/node /usr/bin/node
ln -s /usr/local/node/node-v${version}-linux-x64/bin/npm /usr/bin/npm

# 自定义node，npm安装文件目录
mkdir /usr/local/node/node_global
mkdir /usr/local/node/node_cache
npm config set prefix "/usr/local/node/node_global"
npm config set cache "/usr/local/node/node_cache"

# 安装PM2项目运行环境
npm install -g pm2 --registry=https://registry.npm.taobao.org
ln -s /usr/local/node/node_global/bin/pm2 /usr/bin/pm2

# 安装yarn项目运行环境
npm install -g yarn --registry=https://registry.npm.taobao.org
ln -s /usr/local/node/node_global/bin/yarn /usr/bin/yarn
