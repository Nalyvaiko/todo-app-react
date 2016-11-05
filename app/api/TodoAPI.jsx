export default {
    setTodos(todos) {
        if (todos && todos instanceof Array) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos() {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {

        }

        return (todos && todos instanceof Array) ? todos : [];
    }
};
