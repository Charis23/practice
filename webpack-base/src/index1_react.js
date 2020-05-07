// webpack-dev-server 打包好的main.js是托管到内存中的根目录下面的， 虽然是看不到的, 此时是不用显式地在index.html中引入main.js的
// console.log('webpack test');

import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM


// 创建虚拟DOM
// arg1： 元素类型
// arg2： 元素属性（对象/null）
// arg#:  之后每个参数都表示它的一个子节点
// example: <h1 id="myh1" title="this is a h1">Hello, World</h1>
const myh1 = React.createElement('h1', {
    id: 'myh1',
    title: 'this is a h1'
}, 'Hello, World');

const myDiv = React.createElement('div', null, 'this is a div', myh1);

// 将虚拟DOM渲染到页面上
// arg1: 要渲染的虚拟DOM
// arg2: 页面上的容器， 必须是个原生DOM元素
ReactDOM.render(myDiv, document.getElementById('root'));
