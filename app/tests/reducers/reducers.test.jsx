import expect from 'expect';
import deepf from 'deep-freeze-strict';

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

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

        it('should update todo', () => {
            const todos = [{
                id: '123',
                text: 'Buy milk',
                completed: true,
                createdAt: 123456,
                completedAt: 123489
            }];

            const updates = {
                completed: false,
                completedAt: null
            };

            const action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };

            const res = todosReducer(deepf(todos), deepf(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
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

        it('should wipe todos on logout', () => {
            const todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            const action = {
                type: 'LOGOUT',
                todos
            };
            const res = todosReducer(deepf(todos), deepf(action));

            expect(res.length).toEqual(0);
        });
    });

    describe('authReducer', () => {
        it('should store uid on login', () => {
            const auth = {};
            const action = {
                type: 'LOGIN',
                uid: 'abcd123'
            };
            const res = authReducer(deepf(auth), deepf(action));

            expect(res).toEqual({uid: action.uid});
        });

        it('should wipe auth on logout', () => {
            const auth = {uid: 'abcd123'};
            const action = {type: 'LOGOUT'};
            const res = authReducer(deepf(auth), deepf(action));

            expect(res).toEqual({});
        });
    });
});
