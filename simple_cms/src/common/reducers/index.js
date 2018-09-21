/**
 * In a project, we generally need to divides reducers into parts. 
 * 'combineReducers' is used to combine these parts into one reducer.
 */
import { combineReducers} from 'redux'
import * as todoList from './todoList' // Take todoList as a alias
const rootReducer = combineReducers({
    ...todoList,
})

export default rootReducer