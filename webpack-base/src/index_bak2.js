// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM


// 2. create Virtual DOM
// using JSX (符合XML规范的JS语法), 可以用HTML形式来简化React elements的写法， 实际运行还是会转换为React.createElement()的形式
// JSX的{}中可以使用任意JS表达式， 甚至是注释
// JSX中的属性名称为camelCase，有些属性名称和原生HTML的属性名不相同 eg: className(class), htmlFor(for)
const test = 'test';
const num = 34;
const boo = true;
const title = 'test title';
const elem = <span>this is a span element</span>
const arr = [
    <div key="1">this is the 1st item</div>,
    <div key="2">this is the 2nd item</div>,
    <div key="3">this is the 3rd item</div>,
];

const seqs = ['1st', '2nd', '3rd', '4th'];
const arr2 = seqs.map((item, index) => <div key={index}>this is the {item} item of the array</div>)

const myDiv = <div>
    this is a new {test} myDiv
    <h1>another h1 {num + 10} </h1>
    {boo ? 'it is true' : 'it is fase'}
    <p title={title}>this is a paragraph with title</p>
    {elem}
    {arr}
    {arr2}
    {/* {这是注释} */}
</div>

// 3. render
ReactDOM.render(myDiv, document.getElementById('root'));
