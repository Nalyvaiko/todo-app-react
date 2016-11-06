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
    },

    filterTodos (todos, showCompleted, searchText) {
        let filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Sort todos with non-completed first
        filteredTodos = filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            const text = todo.text.toLowerCase();

            return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
        });

        return filteredTodos;
    }
};
