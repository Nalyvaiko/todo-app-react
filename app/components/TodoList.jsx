import React, {Component} from 'react';

import TodoItem from 'TodoItem';

class TodoList extends Component {

    render () {
        const {todos} = this.props;

        const renderTodos = () => {
            if (todos.length === 0) {
                return <p className="container__message">Nothing To Do</p>
            }

            return todos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default TodoList;
