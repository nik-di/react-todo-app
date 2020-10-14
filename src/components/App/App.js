import React from 'react';
import './app.css';

import Header from '../Header';
import List from '../List';
import AddTodo from '../AddTodo';
import TodoFilter from '../TodoFilter';


const dataArr = [
    { text: 'Drink coffee', id: 'td1', important: true },
    { text: 'Eat breakfast', id: 'td2', important: false },
    { text: 'Drive to work', id: 'td3', important: false }
];

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="app-list-manager">
                <AddTodo />
                <TodoFilter />
            </div>
            <List dataArr={dataArr} />
        </div>
    );
};

export default App;