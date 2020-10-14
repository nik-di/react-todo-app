import React from 'react';
import './list-item.css';

class ListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            done: true,
            important: false
        };

        this.onTextClick = this.onTextClick.bind(this);
        this.markImportantHandler = this.markImportantHandler.bind(this);
    }

    markImportantHandler() {
        this.setState({ important: !this.state.important });
    }

    onTextClick() {
        this.setState({ done: !this.state.done });
    }

    computeClass() {
        const doneClassName = 'done';
        const classList = ['todo-list-item', 'list-group-item', 'done'];
        if (!this.state.done) {
            classList.push(doneClassName);
        } else {
            const indexForRemove = classList.indexOf(doneClassName);
            classList.splice(indexForRemove, 1);
        }
        return classList.join(' ');
    }

    render() {
        const { text } = this.props;
        const listStyle = {
            color: this.state.important ? 'steelblue' : 'black',
            fontWeight: this.state.important ? 'bold' : 'normal'
        };
        return (
            <li className={this.computeClass()}>
                <span style={listStyle}
                    onClick={this.onTextClick}
                >
                    {text}
                </span>
                <div>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button onClick={this.markImportantHandler} type="button" className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation" />
                    </button>
                </div>
            </li>
        );
    }

};

export default ListItem;