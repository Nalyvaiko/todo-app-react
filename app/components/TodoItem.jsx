import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import actions from 'actions';

export class TodoItem extends Component {
    render () {
        const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
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
            <div className={todoClassName} onClick={() => {
                    dispatch(actions.toggleTodo(id));
                }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
}

export default connect()(TodoItem);
