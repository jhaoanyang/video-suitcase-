import React from 'react';
import { Route, Link } from "react-router-dom";

function Header() {

    return (
            <div className="header">
                <Route exact path='/'>
                    <h1>Video Suitcase</h1>
                    <Link className="nav-link" to='/collect'>Collect</Link>
                </Route>
                <Route path='/collect'>
                    <h1>Collect</h1>
                    <Link className="nav-link" to='/'>Home</Link>
                </Route>
                <Route path='/video/:videoId'>
                    <h1>Video Suitcase</h1>
                    <div>
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/collect'>Collect</Link>
                    </div>
                </Route>
            </div>
    );
}

export default Header;