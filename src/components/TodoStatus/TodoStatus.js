import React from 'react';
import './todo-status.css';

const TodoStatus = (props) => {
    const { text = '0 items todo. All done.' } = props;
    return (
        <div role="alert" className="badge badge-pill badge-info todo-status">
            <span>{text}</span>
        </div>
    );
};

export default TodoStatus;