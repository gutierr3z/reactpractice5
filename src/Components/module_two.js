import React from 'react';
import ReactDOM from 'react-dom';
import css from './module_two.css';

const ModuleTwo = ( props ) => {
    return (
        <div className = { css.test }>
            Hello World 2
        </div>
    );
};

export default ModuleTwo;