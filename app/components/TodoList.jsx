import React, {Component} from 'react';

import TodoItem from 'TodoItem';

class TodoList extends Component {

    render () {
        let {todos} = this.props;

        let renderTodos = () => {
            return todos.map((todo) => {
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

export default TodoList;
