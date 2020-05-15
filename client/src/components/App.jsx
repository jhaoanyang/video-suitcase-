import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import VideoBoard from './VideoBoard';
import CollectBoard from './CollectBoard';
import VideoPlay from './VideoPlay';

function App() {
    const dispatch = useDispatch();
    dispatch(actions.loadVideos());
    dispatch(actions.loadCollectVideos());
    

  
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={VideoBoard} />
                <Route path='/collect' component={CollectBoard} />
                <Route path='/video/:videoId' component={VideoPlay} />
            </Switch>
        </Router>

    );
};

export default App;