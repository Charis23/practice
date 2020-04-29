import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: 'c'
        }
        
        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }

    handleCelsius(temperature) {
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }

    handleFahrenheit(temperature) {
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;

        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return ( 
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTempChanged={this.handleCelsius} />
                <TemperatureInput scale='f' temperature={fahrenheit} onTempChanged={this.handleFahrenheit} />
                <BoilingVerdict celsius={celsius} />
            </div>
        );
    }
}

export default Calculator;