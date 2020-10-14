import React from 'react';
import ListItem from '../ListItem/ListItem';
import './list.css';

const List = (props) => {
    const elementsForRender = props.dataArr.map(({ id, ...oth }) => {
        return (
            <ListItem key={id} {...oth} />
        );
    });

    return (
        <ul className="list-group todo-list">
            {elementsForRender}
        </ul>
    );
};

export default List;