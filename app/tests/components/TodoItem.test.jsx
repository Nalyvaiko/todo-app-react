import React from 'react';
import {findDOMNode} from 'react-dom';
import {renderIntoDocument, Simulate} from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import actions from 'actions';
import {TodoItem} from 'TodoItem';

describe('TodoItem', () => {
    it('should exist', () => {
        expect(TodoItem).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        const todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        };

        const action = actions.startToggleTodo(todoData.id, !todoData.completed);

        const spy = expect.createSpy();
        const todoItem = renderIntoDocument(<TodoItem {...todoData} dispatch={spy} />);
        const $el = $(findDOMNode(todoItem));

        Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
