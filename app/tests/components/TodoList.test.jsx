import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoList from 'TodoList';
import TodoItem from 'TodoItem';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one TodoItem component for each todo item', () => {
        const todos = [{
                id: 1,
                text: 'Do something'
            }, {
                id: 2,
                text: 'Check mail'
            }];

        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        const todos = [];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        const $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
