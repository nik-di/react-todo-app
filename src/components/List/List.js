import React from 'react';
import ListItem from '../ListItem/ListItem';
import './list.css';

const List = ({ dataArr, onRemoveTodo, markDone, markImportant }) => {
    const elementsForRender = dataArr.map(({ id, ...oth }) => {
        return (
            <ListItem onRemoveTodo={() => onRemoveTodo(id)}
                onMarkTodo={() => markImportant(id)}
                onTodoDone={() => markDone(id)}
                key={id}
                {...oth}
            />
        );
    });

    return (
        <ul className="list-group todo-list">
            {elementsForRender}
        </ul>
    );
};

export default List;