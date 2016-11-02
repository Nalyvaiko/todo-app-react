import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Get Audi TT'
                }, {
                    id: 4,
                    text: 'Make pool party'
                }
            ]
        }
    }

    handleAddTodo (text) {
        console.log('new todo: %s', text);
    }

    handleSearch (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    render () {
        let {todos} = this.state;

        return (
            <div>
                <h1>Todo App</h1>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
