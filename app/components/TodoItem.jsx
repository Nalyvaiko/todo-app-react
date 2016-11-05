import React, {Component} from 'react';

class TodoItem extends Component {
    render () {
        let {id, text} = this.props;
        return (
            <div>
                {`${id}. ${text}`}
            </div>
        );
    }
}

export default TodoItem;
