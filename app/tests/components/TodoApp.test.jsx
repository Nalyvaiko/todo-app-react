import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        const todoText = 'test text';
        const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        const todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // Check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);

        // Call handleToggle with 11
        todoApp.handleToggle(11);

        // Verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle todo from completed to incompleted', () => {
        const todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };

        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});
