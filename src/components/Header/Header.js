import React from 'react';
import TodoStatus from '../TodoStatus/TodoStatus';
import './header.css';

const Header = ({ todo, done }) => {
    return (
        <div className="header">
            <h1>React ToDo app</h1>
            <TodoStatus toDo={todo} done={done} />
        </div>
    );
};

export default Header;