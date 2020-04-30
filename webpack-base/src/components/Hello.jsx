// .jsx file 是在webpack.config.js中指定了babel-loader加载的文件类型的

import React from 'react';

// ES6 export syntax
export default function Hello(props) {
    return <div>
        Hello Component
        <br />
        {props.name} is {props.age} years old and its gender is {props.gender}
    </div>;
    // return null; // return null 则表示该组件什么都不渲染
}