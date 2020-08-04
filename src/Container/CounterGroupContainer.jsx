import { connect } from 'react-redux'
import CounterGroup from '../Components/CounterGroup'
const mapStateToProps= state=>{
    return {
        size:state.size,
        total:state.total
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        updateCount:(type,size)=>{
            dispatch({
                type,size
            })
        },
        updateTotal:(type)=>{
            dispatch(
                {
                    type
                }
            )
        }
    }
}
const CounterGroupContainer=connect(mapStateToProps,mapDispatchToProps)(CounterGroup)
export default CounterGroupContainer
