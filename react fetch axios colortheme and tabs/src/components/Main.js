import React, { useState, useEffect, Fragment } from 'react';
import Nav from './Nav';
import Tabs from './Tabs'; 
import Context from './Context';

function Main() {

    return(
        <div className="container">
            <Nav />

            <Tabs>
                <div label="Tab panel 1">
                    <Context />
                </div>
                <div label="Tab panel 2">
                    <Context />
                </div>
                <div label="Tab panel 3">
                    <Context />
                </div>
            </Tabs> 
                </div>
    )
}

export default Main;