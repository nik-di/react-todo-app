import React from 'react';
import './add-todo.css';

const AddTodo = ({ addTodoHandler }) => {
    const addHandler = () => {
        addTodoHandler('Some text')
    };

    return (
        <div>
            <input className="form-control-sm" placeholder="Add todo"></input>
            <button className="btn btn-outline-secondary"
                onClick={addHandler}
            >Add item</button>
        </div>
    );
};

export default AddTodo;