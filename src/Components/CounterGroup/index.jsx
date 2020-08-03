import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 1,
            total: 0
        }
    }
    handelChange(e) {
        if (e.target.value === '')
            this.setState({
                inputValue: 0,
                total: 0
            })
        else
            this.setState({
                inputValue: e.target.value,
                total: 0
            })
    }
    handleTotalChange=(value)=> {
        this.setState(
            {
                total: this.state.total + value
            }
        )
    }
    render() {
        return (

            <div>
                <p>number of counters<input type="number" onChange={this.handelChange.bind(this)} defaultValue={this.state.inputValue} /></p>
                <p>total: {this.state.total}</p>
                {new Array(parseInt(this.state.inputValue)).fill(0).map((value, index) =>
                    <Counter key={index} numberChange={this.handleTotalChange} />)}

            </div>
        )
    }

}
export default CounterGroup