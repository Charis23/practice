// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM

// 2. import CommentList
// import CommentList from './components/CommentList';
import CommentList from '@component/CommentList';

// 3. render
ReactDOM.render(<div>
    <CommentList />
</div>, document.getElementById('root'));