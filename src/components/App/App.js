import React from 'react';
import './app.css';

import Header from '../Header';
import List from '../List';
import AddTodo from '../AddTodo';
import TodoFilter from '../TodoFilter';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                this._generateDataItem('Drink coffee', 1),
                this._generateDataItem('Eat breakfast', 2),
                this._generateDataItem('Drive to work', 3)
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.toggleImportant = this.toggleImportant.bind(this);
    }

    _generateDataItem(text, num) {
        const nextId = `td${num}`;
        return (
            { text, id: nextId, done: false, important: false }
        );
    }

    _dataStateManager(arrData, searchId, propName = null) {
        const searchedIndx = arrData.findIndex(({ id }) => id === searchId);
        if (propName) {
            const newItem = propName &&
            {
                ...arrData[searchedIndx],
                [propName]: !arrData[searchedIndx][propName]
            };
            return [
                ...arrData.slice(0, searchedIndx),
                newItem,
                ...arrData.slice(searchedIndx + 1)
            ];
        };
        return [
            ...arrData.slice(0, searchedIndx),
            ...arrData.slice(searchedIndx + 1)
        ];
    }

    removeItem(idForRemove) {
        this.setState(({ data }) => {
            return { data: this._dataStateManager(data, idForRemove) };
        });
    }

    addItem(text) {
        this.setState(({ data }) => {
            const newData = [...data];
            const lastNum = +data[data.length - 1].id.replace(/[a-z]/g, '');
            newData.push(this._generateDataItem(text, lastNum + 1));
            return { data: newData };
        });
    }

    toggleDone(markedId) {
        this.setState(({ data }) => {
            return { data: this._dataStateManager(data, markedId, 'done') }
        });
    }

    toggleImportant(markedId) {
        this.setState(({ data }) => {
            return { data: this._dataStateManager(data, markedId, 'important') }
        });
    }

    render() {
        const { data } = this.state;
        const todoCount = data.filter(({ done }) => !done).length;
        const doneCount = data.length - todoCount;
        return (
            <div className="app">
                <Header
                    todo={todoCount}
                    done={doneCount} />
                <div className="app-list-manager">
                    <AddTodo addTodoHandler={this.addItem} />
                    <TodoFilter />
                </div>
                <List onRemoveTodo={this.removeItem}
                    dataArr={data}
                    markDone={this.toggleDone}
                    markImportant={this.toggleImportant}
                />
            </div>
        );
    }
};