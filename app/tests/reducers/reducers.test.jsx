import expect from 'expect';
import deepf from 'deep-freeze-strict';

import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Dog'
            };
            const res = searchTextReducer(deepf(''), deepf(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            const res = showCompletedReducer(deepf(false), deepf(action));

            expect(res).toBe(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123abc',
                    text: 'Something to do',
                    completed: false,
                    createdAt: 92384275,
                    completedAt: null
                }
            };
            const res = todosReducer(deepf([]), deepf(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
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
            const res = todosReducer(deepf(state), deepf(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });

        it('should add existing todos', () => {
            const todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            const action = {
                type: 'ADD_TODOS',
                todos
            };
            const res = todosReducer(deepf([]), deepf(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});
