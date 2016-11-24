import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from 'TodoItem';
import TodoAPI from 'TodoAPI';

export class TodoList extends Component {

    render() {
        const {todos, showCompleted, searchText} = this.props;

        const renderTodos = () => {
            const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            if (!filteredTodos.length) {
                return <p className="container__message">Nothing To Do</p>;
            }

            return filteredTodos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(TodoList);
