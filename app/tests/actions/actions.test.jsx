import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase';
import actions from 'actions';

const createMockStore = configureMockStore([thunk]); // Passing array of middleware

describe('Actions', () => {
    it('should generate new action', () => {
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };

        const res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: 'ADD_TODO',
            todo: {
                id: '123abc',
                text: 'Thing to do',
                completed: false,
                createdAt: 0
            }
        };

        const res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    });

    it('should generate add todos action object', () => {
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
        const res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        const res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should generate update todo action', () => {
        const action = {
            type: 'UPDATE_TODO',
            id: '3',
            updates: {completed: false}
        };

        const res = actions.updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });

    describe('Auth tests', () => {
        it('should generate login action', () => {
            const action = {
                type: 'LOGIN',
                uid: 'absd1236'
            };
            const res = actions.login(action.uid);

            expect(res).toEqual(action);
        });

        it('should generate logout action', () => {
            const action = {type: 'LOGOUT'};
            const res = actions.logout();

            expect(res).toEqual(action);
        });
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;
        let uid;
        let todosRef;

        beforeEach((done) => {
            const credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);

            firebase.auth().signInWithCredential(credential).then((user) => {
                uid = user.uid;
                todosRef = firebaseRef.child(`users/${uid}/todos`);

                return todosRef.remove();
            }).then(() => {
                testTodoRef = todosRef.push();

                return testTodoRef.set({
                    text: 'Something to do',
                    completed: false,
                    createdAt: 23453453
                });
            })
            .then(() => done())
            .catch(done);
        });

        afterEach((done) => {
            todosRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startAddTodos();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions[0].todos.text).toEqual(testTodoRef.text);

                done();
            }, done);
        });

        it('should create todo and dispatch ADD_TODO', (done) => {
            const store = createMockStore({auth: {uid}});
            const todoText = 'My todo item';

            store.dispatch(actions.startAddTodo(todoText)).then(() => {
                const action = store.getActions();

                expect(action[0]).toInclude({
                    type: 'ADD_TODO'
                });
                expect(action[0].todo).toInclude({
                    text: todoText
                });

                done();
            }).catch(done);
        });
    });
});
