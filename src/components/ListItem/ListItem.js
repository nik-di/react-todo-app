import React from 'react';
import './list-item.css';

const ListItem = (props) => {
    const {
        text, onRemoveTodo, done, important, onTodoDone, onMarkTodo
    } = props;
    const listStyle = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    const markImportantHandler = () => {
        onMarkTodo();
    }

    const todoDoneHandler = () => {
        onTodoDone();
    }

    return (
        <li className={
            "todo-list-item list-group-item" +
            (done ? ' done' : '')
        }>
            <span style={listStyle}
                onClick={todoDoneHandler}
            >
                {text}
            </span>
            <div>
                <button type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onRemoveTodo}
                >
                    <i className="fa fa-trash-o"></i>
                </button>
                <button onClick={markImportantHandler}
                    type="button"
                    className={"btn btn-outline-success btn-sm" + (important ? ' active' : '')}
                >
                    <i className="fa fa-exclamation" />
                </button>
            </div>
        </li >
    );

};

export default ListItem;