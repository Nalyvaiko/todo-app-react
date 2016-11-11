const actions = {
    setSearchText(searchText) {
        return {type: 'SET_SEARCH_TEXT', searchText};
    },

    toggleShowCompleted() {
        return {type: 'TOGGLE_SHOW_COMPLETED'};
    },

    addTodo(text) {
        return {type: 'ADD_TODO', text};
    },

    toggleTodo(id) {
        return {type: 'TOGGLE_TODO', id};
    }
};

export default actions;
