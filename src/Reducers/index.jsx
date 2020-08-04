import { combineReducers } from 'redux'
import size from "./size";
import total from './total'
const reducer=combineReducers({
    total,
    size
})
export default reducer;