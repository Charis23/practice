// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM


// 直接导入js文件
import './basic/es5_contructor_function';
import './basic/es6_class';

// 3. render
ReactDOM.render(<div>
    this is a test div
</div>, document.getElementById('root'));