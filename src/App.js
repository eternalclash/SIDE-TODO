import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore.js";
import Main from './components/Main';
function App() {
  return (
    <div className="App">
   <ConnectedRouter history={history}>
     <Route path="/" exact component={Main}/>
   </ConnectedRouter>
    </div>
  );
}

export default App;
