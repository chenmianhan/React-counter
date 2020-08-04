import React from 'react';
const INCREASE="INCREASE";
const DECREASE="DECREASE"
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }

    }
    onClickAdd = () => {
        this.setState((preState) => {
            return {
                number: preState.number+1
            }
        });
        this.props.updateTotal(INCREASE);
    }
    onClickDelete = () => {
        this.setState((preState) => {
            return {
                number: preState.number-1
            }
        });
        this.props.updateTotal(DECREASE);
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     const {counterNumbers} = nextProps;

    //     if (counterNumbers !== prevState.counterNumbers) {
    //         prevState.number=0;
    //         return {
    //             counterNumbers,
    //         };
    //     }

    //     return null;
    // }
    componentDidUpdate=(nextProps)=>{
        if(this.props.size!==nextProps.size){
            this.setState(()=>{
                return {
                    number: 0
                }
            });
        }
        return 
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