import React from 'react';

class BoilingVerdict extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const celsius = this.props.celsius;
        return (
            celsius >= 100 ? <p>The water would boil.</p> : <p>The water would NOT boil.</p>
        );
    }
}

export default BoilingVerdict;