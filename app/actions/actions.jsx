import firebase, {firebaseRef, githubProvider} from 'app/firebase';
import moment from 'moment';

const actions = {
    setSearchText(searchText) {
        return {type: 'SET_SEARCH_TEXT', searchText};
    },

    toggleShowCompleted() {
        return {type: 'TOGGLE_SHOW_COMPLETED'};
    },

    addTodo(todo) {
        return {type: 'ADD_TODO', todo};
    },

    startAddTodo(text) {
        return (dispatch, getState) => {
            const todo = {
                text,
                completed: false,
                createdAt: moment().unix(),
                completedAt: null
            };

            const todoRef = firebaseRef.child('todos').push(todo);

            return todoRef.then(() => {
                dispatch(this.addTodo({
                    ...todo,
                    id: todoRef.key
                }));
            });
        };
    },

    addTodos(todos) {
        return {type: 'ADD_TODOS', todos};
    },

    startAddTodos() {
        return (dispatch, getState) => {
            const todosRef = firebaseRef.child('todos');

            return todosRef.once('value').then((snapshot) => {
                const todos = snapshot.val() || {};
                const parsedTodos = [];

                Object.keys(todos).forEach((todoId) => {
                    parsedTodos.push({
                        id: todoId,
                        ...todos[todoId]
                    });
                });

                dispatch(this.addTodos(parsedTodos));
            });
        };
    },

    updateTodo(id, updates) {
        return {
            type: 'UPDATE_TODO',
            id,
            updates
        };
    },

    startToggleTodo(id, completed) {
        return (dispatch, getState) => {
            const todoRef = firebaseRef.child(`todos/${id}`);
            const updates = {
                completed,
                completedAt: completed ? moment().unix() : null
            };

            return todoRef.update(updates).then(() => {
                dispatch(this.updateTodo(id, updates));
            });
        };
    },

    startLogin() {
        return (dispatch, getState) => {
            return firebase.auth().signInWithPopup(githubProvider).then((result) => {
                console.log('Auth worked!', result);
            }, (error) => {
                console.log('Unable to auth', error);
            });
        };
    },

    startLogout() {
        return (dispatch, getState) => {
            return firebase.auth().signOut().then(() => {
                console.log('Logged out!');
            });
        };
    }
};

export default actions;
