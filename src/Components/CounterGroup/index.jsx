import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 1
        }
    }
    handelChange(e) {
        if (e.target.value === '')
            this.setState({
                inputValue: 0
            })
        if (this.checkNumber(e.target.value))
            this.setState({
                inputValue: e.target.value
            })
    }
    render() {
        return (

            <div>
                number of counters<input type="text" onChange={this.handelChange.bind(this)} defaultValue={this.state.inputValue} />
                {new Array(parseInt(this.state.inputValue)).fill(0).map((value, index) => <Counter key={index} />)}
            </div>
        )
    }
    checkNumber(theObj) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
            return true;
        }
        return false;
    }
}
export default CounterGroup