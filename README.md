# vue-ssr-webpack

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

#### 遇到的问题

1. 如何区分 build 服务端还是客户端？(使用跨平台脚本,定义一个变量,根据变量值来判断 build 的配置文件。cross-env WEBPACK_TARGET=client)
2. build 后 dist 会被删除，服务端 build 和客户端 build 的 dist 不能共存？(npx vue-cli-service help build 查看命令 发现有个 --no-clean, 每次打包不清理原来的文件夹)
3. 服务端 build 后,样式无法展示出来(访问 css,js 资源都是文档型)? (将客户端 bundle 给浏览器进行混合静态标记,并且开启静态资源访问Express 提供了内置的中间件 express.static 来设置静态文件
