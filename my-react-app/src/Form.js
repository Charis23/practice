import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.updateValue = this.updateValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    updateValue(event) {
        this.setState({
            value: event.target.value
        })
    }

    submitForm(event) {
        alert(`The name you submit is: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        const test = 'test value';
        return (
            <form onSubmit={this.submitForm}>
                <label>
                    name: <textarea type="text" value={this.state.value} onChange={this.updateValue} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;