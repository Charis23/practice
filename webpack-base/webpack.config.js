
const path = require('path'); // Node 自带
const htmlWebpackPlugin = require('html-webpack-plugin'); // 导入在内存中自动生成index页面的插件

const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象
// webpack是基于Node构建的， 支持所有的Node API及其语法
// webpack 4.x 中，默认的entry file是src/index.js文件， 会打包到 dist/main.js中
module.exports = {
    mode: 'development', // ['development', 'production']
    plugins: [
        htmlPlugin
    ]
}