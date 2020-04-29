import React from 'react';
import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import List from './List';
import Form from './Form';
import Calculator from './Calculator';


function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  login() {
    this.setState({
      isLogin: true
    });
  }

  logout() {
    this.setState({
      isLogin: false
    });
  }
  
  render() {
    let button;

    if(this.state.isLogin) {
      button = <LogoutButton onClick={this.logout.bind(this)} />
    }else {
      button = <LoginButton onClick={this.login.bind(this)} />
    }
    return (
      <div>
        <Calculator />
        <Form />
        {button}
        <Greeting isLogin={this.state.isLogin} />
        {/* <List numbers={[1,2,3,4,5,6]} /> */}
        <List />
        <div style={{backgroundColor: 'pink', height: '220px'}}></div>
      </div>
    );
  }
}

export default App;
