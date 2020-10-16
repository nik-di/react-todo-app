import React from 'react';
import './todo-status.css';

const TodoStatus = (props) => {
    const { toDo = 0, done } = props;
    return (
        <div role="alert" className="badge badge-pill badge-info todo-status">
            <span>{`${toDo} items todo. ${done ? done : 'All'} done`}</span>
        </div>
    );
};

export default TodoStatus;