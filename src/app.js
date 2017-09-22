import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// require( './Components/module_one.css' );
//--------------------------------------------------
import ModuleOne from './Components/module_one';
//==================================================
class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    };

    render() {
        return (
            
            <div>
                hello there!
                <ModuleOne />
            </div>
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );