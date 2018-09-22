/**
 * Use handleActions in redux-action to handle reducer
 */
import {handleActions} from 'redux-actions';

const todo = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false 
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id){
                return state
            }

            //React can't tell if an object has changed, we have to create a new object.
            //Object.assign can combine multiple object into one, the first parameter is target object
            //and followed by source objects. 
            return Object.assign({}, state, {
                completed: !state.completed
            })
        default:
            return state
    }
}

//Set default values of state
const todoListInit = [
    {
        id: -3,
        text: 'Requirement analysis',
        complete: false
    },
    {
        id: -2,
        text: 'System design',
        complete: false
    },
    {
        id: -3,
        text: 'Project plan',
        complete: false
    }
]

export const todoList = handleActions({
    'ADD_TODO' (state, action){
        console.log(action.payload); //action.payload acquire action object
        return [
            ...state,
            todo(undefined, action.payload)
        ]
    },
    'TOGGLE_TODO' (state, action){
        //console.log(action.payload); //action.payload acquire action object
        return state.map(t => todo(t, action.payload))
    },
    'DEL_TODO' (state, action){
        console.log(action.payload); //action.payload acquire action object
        return state.filter(t => t.id !== action.payload.id)
    },
}, todoListInit)


