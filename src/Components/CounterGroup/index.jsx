import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (

            new Array(this.props.amount).fill(1).map((value, index) => <Counter key={index} />)

        )

    }
}
export default CounterGroup