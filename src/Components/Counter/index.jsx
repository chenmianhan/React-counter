import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            inputValue:0
        }
    }
    onClickAdd = () => {
        this.setState({ number: this.state.number + 1 })
        this.props.numberChange(1);
    }
    onClickDelete = () => {
        this.setState({ number: this.state.number - 1 })
        this.props.numberChange(-1);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const {inputValue} = nextProps;
      
        if (inputValue !== prevState.inputValue) {
            prevState.number=0;
            return {
                inputValue,
            };
        }
       
        return null;
    }
    render() {
        return (

            <div>
                <button onClick={this.onClickAdd}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.onClickDelete}>-</button>
            </div>
        )

    }
}
export default Counter