import React from 'react';

import CommentItem from './CommentItem';

class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            commentList: [
                { id: 1, user: 'Tom', content: 'I think it\'s great!' },
                { id: 2, user: 'Jack', content: 'I like it!' },
                { id: 3, user: 'Lucy', content: 'Wow, so wonderful!' },
                { id: 4, user: 'Jenney', content: 'Excellent!' },
                { id: 5, user: 'Alice', content: 'Awesome!' },
            ]
        }
    }

    render() {
        return (
            <div>
                {/* JSX中属性值是camelCase的， 其属性值必须用{}表达式表示，如：{{样式对象}} */}
                {/* 字符串类型的样式值必须用“ ”包着， 数值则不用 */}
                <h2 style={{color: 'red', fontSize: '35px', zIndex: 3, fontWeight: 200, textAlign: 'center'}}>This is the Comment List</h2>
                {this.state.commentList.map(item => <CommentItem {...item} key={item.id} />)}
            </div>
        );
    }
}

export default CommentList;