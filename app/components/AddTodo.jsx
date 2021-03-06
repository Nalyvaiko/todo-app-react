import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';

export class AddTodo extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';

            const {dispatch} = this.props;

            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    }

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);
