import React from 'react';


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        // const numbers = this.props.numbers;
        const listElements = numbers.map(num => <li key={num}>{num}</li>);

        return (
            <ul>{listElements}</ul>
        );
    }
}

export default List;