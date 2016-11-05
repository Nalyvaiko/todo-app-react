import React, {Component} from 'react';

import TodoItem from 'TodoItem';

class TodoList extends Component {

    render () {
        const {todos} = this.props;

        const renderTodos = () => {
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
