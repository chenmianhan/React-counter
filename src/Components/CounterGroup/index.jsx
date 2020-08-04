import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {

    handelChange(event) {
        event.persist()
        if (event.target.value === ''||parseInt(event.target.value)<0)
        this.setState(() => {
            return {
                size:0,
                total:0
            }
        });
        else
            {this.props.updateTotal('CLEAR_TOTAL')
            this.props.updateCount('UPDATE_COUNT',event.target.value)}
        
    }
    
    updateTotal=(value)=> {
        this.props.updateTotal(value)
    }

    render() {

        return (
            <div>
                <p>number of counters<input type="number" onChange={this.handelChange.bind(this)} defaultValue={this.props.size} /></p>
                <p>total: {this.props.total}</p>
                {new Array(parseInt(this.props.size)).fill(0).map((value, index) =>
                    <Counter key={index} updateTotal={this.updateTotal} size={this.props.size}/>)}

            </div>
        )
    }
   

};

export default CounterGroup