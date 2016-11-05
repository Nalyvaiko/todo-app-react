import React, {Component} from 'react';

class TodoSearch extends Component {
    handleSearch () {
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)} />
                </div>
                <div>
                    <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)} />
                    Show completed todos
                </div>
            </div>
        );
    }
}

export default TodoSearch;
