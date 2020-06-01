import React from 'react';

// 1. separate style from JSX element

/* const itemStyle = { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' };
const userStyle  = { fontSize: '14px' };
const contentStyle  = { fontSize: '12px' };

function CommentItem(props) {
    return (
        <div style={itemStyle}>
            <h4 style={userStyle}>User: {props.user}</h4>
            <p style={contentStyle}>Content: {props.content}</p>
        </div>
    )
} */


// 2. separate style from JSX, and combine all style objects

const commentStyle = {
    item: { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' },
    user: { fontSize: '14px' },
    content:  { fontSize: '12px' }
};

function CommentItem(props) {
    return (
        <div style={commentStyle.item}>
            <h4 style={commentStyle.user}>User: {props.user}</h4>
            <p style={commentStyle.content}>Content: {props.content}</p>
        </div>
    )
}




export default CommentItem;