import React from 'react';

class TodoItem extends React.Component {
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
