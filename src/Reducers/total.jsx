const total=(state=0,action)=>{
    switch(action.type){
        case 'INCREASE': {
            return state+1          
        }
        case 'DECREASE': {
            return state-1  
        }
        case 'CLEAR_TOTAL':{
            return 0
        }
        default:return state
    }
}
export default total