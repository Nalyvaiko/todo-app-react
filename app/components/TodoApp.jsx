import React, {Component} from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    }

    componentDidUpdate () {
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    }

    handleSearch (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    handleToggle (id) {
        const updatedTodos = this.state.todos.map((todo) => {
            (todo.id === id) ? todo.completed = !todo.completed : null;

            return todo;
        });

        this.setState({todos: updatedTodos});
    }

    render () {
        const {todos, showCompleted, searchText} = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1>Todo App</h1>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)} />
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
