import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// require( './Components/module_one.css' );
//--------------------------------------------------
import ModuleOne from './Components/module_one';
import ModuleTwo from './Components/module_two';
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
                <ModuleTwo />
            </div>
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );