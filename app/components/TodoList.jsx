import React from 'react';

import TodoItem from 'TodoItem';

class TodoList extends React.Component {

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
