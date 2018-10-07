import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toogleTodo, delTodo, toggleTodo} from '../../actions/todoList';
import FilterLink from './filterLink'
import './index.scss'

//Use 'connect' in react-redux to connect the reducer and the current page
let nextTodoId = 0; // Define the id a todo

@connect(
    (state) => ({ //There are two items exported from reducers
        todoList: state.todoList,
        setVisibility: state.setVisibility,
    })
)



//TODO: sumbit the add requirement

class TodoList extends React.Component{
    submit = (e) => {
        e.preventDefault();
        if (!this.input.value.trim()){ //this.input.value is ref of input
            return
        }
        this.props.dispatch(addTodo({ //this.props is 'store'
            id: nextTodoId++,
            text: this.input.value,
            type: 'ADD_TODO',
        }));
        this.input.value = '';
    }
    render(){
        const todoList = this.props.todoList;
        const setVisibility = this.props.setVisibility;
        console.log(todoList);
        console.log(setVisibility);
        let todos =  todoList;

        if(setVisibility.filter === 'SHOW_COMPLETED'){
            todos = todoList.filter(t => t.completed)
        }else if (setVisibility.filter === 'SHOW_ACTIVE') {
            todos = todoList.filter(t => !t.completed)
        }
        // debugger;

        return (
            <div className="todo-box">
                <h2> This is todo list.</h2> 
                <div className="todo-innerBox">
                    <div className="todo-tab">
                        {/* TODO: Add filter tabs */}
                        <FilterLink filter="SHOW_ALL" name="Show All"/>
                        <FilterLink filter="SHOW_ACTIVE" name="Show On Going"/>
                        <FilterLink filter="SHOW_COMPLETED" name="Show Completed Tasks"/>
                        
                    </div>
                    <ul className="list-group">
                    <li>list tasks</li>
                        {
                            todos.map(todo => 
                                <li className="todo-list_li" style={{textDecoration:todo.completed ? "line-through":"none"}}>
                                    <input type="checkbox" 
                                           className="check-box" 
                                           checked={todo.completed} 
                                           onClick={e => this.props.dispatch(toggleTodo({
                                               id: todo.id,
                                               type: "TOGGLE_TODO"
                                    }))}/>
                                    {todo.text}
                                    <button className="todo-list_del" onClick={e => this.props.dispatch(delTodo({
                                        id: todo.id,
                                        type:"DEL_TODO"
                                    }))}>
                                    DELETE
                                    </button>

                                </li>
                            )
                        }
                    </ul>
                    <form onSubmit={this.submit} className="todo-add">
                        <input placeholder="Input your new task" ref={r => this.input = r} className="todo-input"/>
                        <button type="submit" className="todo-btn">Add A Task</button>
                    </form>

                </div>
                    
            </div>
        )
    }
}

export default TodoList;