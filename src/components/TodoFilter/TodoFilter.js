import React from 'react';
import './todo-filter.css';

class TodoFilter extends React.Component {
    render() {
        return (
            <div className="todo-filter btn-group" role="group">
                <button type="button" className="btn btn-light todo-filter-btn active-btn">All</button>
                <button type="button" className="btn btn-light todo-filter-btn">Active</button>
                <button type="button" className="btn btn-light todo-filter-btn">Done</button>
            </div>
        );
    }
};

export default TodoFilter;