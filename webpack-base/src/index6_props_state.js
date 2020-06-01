// 1. import
import React from 'react';  // 创建component，虚拟DOM元素， 生命周期
import ReactDOM from 'react-dom'; // 在页面上展示component， 虚拟DOM

// 2. class React Component -> 【有状态组件】
// 通过class创建的React组件，好处在有自己的【私有数据】和【生命周期函数】
class Test extends React.Component {
    constructor() {
        super();

        this.state = {
            msg: 'Hello, test'
        };
    }

    // 必须要有render()函数
    // this.props is readonly
    render() {
        // this.props.name = 'updated name'; // this.props是只读的， 这个语句会error
        this.state.msg = 'Hello, updated test'; // this.state 是可修改的

        return (
            <div>
                Test Class React Component <br/>
                {this.props.name}, {this.props.age}, {this.props.gender} <br/>
                {this.state.msg}
            </div>
        );
    }
}

const user = {
    name: 'Tom',
    age: 12,
    gender: 'Male'
};

// 3. render
ReactDOM.render(<div>
    this is a test div
    <Test {...user}></Test>
</div>, document.getElementById('root'));