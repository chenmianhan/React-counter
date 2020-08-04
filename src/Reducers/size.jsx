const size=(state=0,action)=>{
    switch(action.type){
        case 'UPDATE_COUNT':
            return action.size
        default:return state 
    }
};
export default size