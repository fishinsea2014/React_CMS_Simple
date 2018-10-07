import { combineReducers} from 'redux'
import * as todoList from './todoList'

const rootReducer = combineReducers({
    ...todoList,
})
//debugger;
export default rootReducer