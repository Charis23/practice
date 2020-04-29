import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };

        this.click = this.click.bind(this);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    click(e) {
        e.stopPropagation();
        alert('ohoh, you click me');
    }

    render() {
        return (
            <div onClick={this.click}>
                <h3>Hello, Clock</h3>
                <h4>It is {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock;