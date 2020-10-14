import React from 'react';
import TodoStatus from '../TodoStatus/TodoStatus';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>React ToDo app</h1>
            <TodoStatus />
        </div>
    );
};

export default Header;