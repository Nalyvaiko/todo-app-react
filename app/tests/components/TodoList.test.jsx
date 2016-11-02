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
        let todos = [{
                id: 1,
                text: 'Do something'
            }, {
                id: 2,
                text: 'Check mail'
            }];

        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

        expect(todosComponents.length).toBe(todos.length);

    });
});
