import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.tempchanged = this.tempchanged.bind(this);
    }

    tempchanged(event) {
        this.props.onTempChanged(event.target.value);
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        
        return (
            <fieldset>
                <legend>Please enter {scaleNames[scale]}: </legend>
                <input type="text" value={temperature} onChange={this.tempchanged} />
            </fieldset>
        );
    }
}

export default TemperatureInput;