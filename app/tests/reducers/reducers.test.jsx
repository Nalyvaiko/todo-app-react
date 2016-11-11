import expect from 'expect';
import deepf from 'deep-freeze-strict';

import reducers from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Dog'
            };
            const res = reducers.searchTextReducer(deepf(''), deepf(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            const res = reducers.showCompletedReducer(deepf(false), deepf(action));

            expect(res).toBe(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };
            const res = reducers.todosReducer(deepf([]), deepf(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo', () => {
            const state = [
                {
                    id: '123',
                    text: 'Buy milk',
                    completed: true,
                    createdAt: 123456,
                    completedAt: 123489
                }
            ];
            const action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            const res = reducers.todosReducer(deepf(state), deepf(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });
});
