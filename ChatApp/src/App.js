import React from 'react'

import {BrowserRouter as Router , Route } from 'react-router-dom' ;

import Join from "./component/join/Join.js"
import Chat from "./component/chat/Chat.js"

const App = () => {
    return(
    <Router>
    <Route path="/" exact component = {Join} />
    <Route path="/chat"  component = {Chat} />
    </Router>
    )};

export default App;