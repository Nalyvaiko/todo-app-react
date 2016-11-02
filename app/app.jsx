import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// require styles with loaders (style, css, sass)
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
