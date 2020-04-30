// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM

import Hello from '@/components/Hello'; // 省略的后缀名.jsx是在webpack.config.js中resolve->extensions中指定的

// 2. create component
// 组件名首字母必须大写


const dog = {
    name: 'Jerry',
    age: 3,
    gender: 'M'
}

const myDiv = <div>
    this is a div
    {/* <Hello name={dog.name} age={dog.age} gender={dog.gender} /> */}
    <Hello {...dog} /> 
    {/* {...dog} ES6 spread operator */}
</div>

// 3. render
ReactDOM.render(myDiv, document.getElementById('root'));
