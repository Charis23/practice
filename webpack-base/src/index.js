// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM


// 2. create component
// 组件名首字母必须大写
function Hello(props) {
    return <div>
        Hello Component
        <br />
        {props.name} is {props.age} years old and its gender is {props.gender}
    </div>;
    // return null; // return null 则表示该组件什么都不渲染
}

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
