import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counternumbers: 1,
            total: 0
        }
    }
    handelChange(event) {
        if (event.target.value === '')
            this.setState({
                counternumbers: 0,
                total: 0
            })
        else
            this.setState({
                counternumbers: event.target.value,
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
                <p>number of counters<input type="number" onChange={this.handelChange.bind(this)} defaultValue={this.state.counternumbers} /></p>
                <p>total: {this.state.total}</p>
                {new Array(parseInt(this.state.counternumbers)).fill(0).map((value, index) =>
                    <Counter key={index} numberChange={this.handleTotalChange} counterNumbers={this.state.counternumbers}/>)}

            </div>
        )
    }

}
export default CounterGroup