# Hyuga-react

## Deploy

1. 修改全局变量 [src/main.js](./src/main.js)

   - 修改域名 `global.HOST`
   - `global.DEBUG` 改为 `false`[src/main.js](./src/main.js)

2. 执行`npm run build`

3. 将 [build/](./build) 目录下的所有文件复制到 [Hyuga deploy/nginx/www](https://github.com/Buzz2d0/Hyuga/tree/master/deploy/nginx/www)目录下。
