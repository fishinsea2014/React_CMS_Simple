import React from 'react';
import { connect } from 'react-redux';
import { setVisibility} from '../../actions/todoList';
import './index.scss'

@connect (
    (state) => ({
        setVisibility: state.setVisibility,
    })
)

class FilterLink extends React.Component {
    onClick = () => {
        var a = setVisibility({filter: this.props.filter});
        this.props.dispatch(a);
    }

    render(){
        const { name, filter} = this.props;
        const active = this.props.setVisibility.filter === filter;
        return (
            <div className="todo-tab_item">
                <a style={{color: active ? '#f01414' : '#4d55d'}} onClick={this.onClick}>{name}</a>
            </div>
        )
    }
}

export default FilterLink