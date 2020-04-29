import React from 'react';

function LoginedUser() {
    return <div>Welcome!</div>
}

function UnLoginedUser() {
    return <div>Please login first.</div>
}

class Greeting extends React.Component {
  
    render() {
    //     if (this.props.isLogin) {
    //         return <LoginedUser />
    //     } else {
    //         return <UnLoginedUser />
    //     }
        return this.props.isLogin ? <LoginedUser /> : <UnLoginedUser />
    }

}

export default Greeting;