import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------

//==================================================
class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    };

    render() {
        return (
            <div className="container oo-main">

            </div>
            
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );