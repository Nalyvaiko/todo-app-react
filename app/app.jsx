import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import actions from 'actions';
import store from 'configureStore';
import TodoAPI from 'TodoAPI';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
import 'style!css!sass!applicationStyles';

render (
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
