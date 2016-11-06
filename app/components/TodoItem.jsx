import React, {Component} from 'react';
import moment from 'moment';

class TodoItem extends Component {
    render () {
        const {id, text, completed, createdAt, completedAt} = this.props;
        const renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
        };

        return (
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}

export default TodoItem;
