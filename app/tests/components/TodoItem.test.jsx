import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoItem from 'TodoItem';

describe('TodoItem', () => {
    it('should exist', () => {
        expect(TodoItem).toExist();
    });
});
