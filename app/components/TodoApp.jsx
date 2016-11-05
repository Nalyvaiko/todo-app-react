import React, {Component} from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Get Audi TT',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Make pool party',
                    completed: false
                }
            ]
        }
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
        const {todos} = this.state;

        return (
            <div>
                <h1>Todo App</h1>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <TodoList todos={todos} onToggle={this.handleToggle.bind(this)} />
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
