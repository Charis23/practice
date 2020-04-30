// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM


// 2. create Virtual DOM
// using JSX (符合XML规范的JS语法), 可以用HTML形式来简化React elements的写法， 实际运行还是会转换为React.createElement()的形式
/* 
babel插件
babel-core
babel-loader 
*/
const myDiv = <div>
    this is a new myDiv
    <h1>another h1</h1>
</div>

// 3. render
ReactDOM.render(myDiv, document.getElementById('root'));
