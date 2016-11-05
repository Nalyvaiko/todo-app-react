import React from 'react';
import {render} from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// require styles with loaders (style, css, sass)
import 'style!css!sass!applicationStyles';

render (
    <TodoApp />,
    document.getElementById('app')
);
