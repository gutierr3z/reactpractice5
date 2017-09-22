import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './module_one.css';


class ModuleOne extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
    };

    render() {
        console.log('tets',css, css.testx)
        return (
            <div className={css.testx}>
                Hello World 1
            </div>
        );
    };
};

export default ModuleOne;