import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import * as UiExtension from "@bloomreach/ui-extension";
import ExtPickerDialog from "./Dialog";

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const ui = await UiExtension.register();

    const routing = (
      <Router>
        <Switch>
          <Route path="/dialog" render={props => <ExtPickerDialog ui={ui}/>}/>
          <Route exact path="/" render={props => <App ui={ui}/>}/>
        </Switch>
      </Router>
    );

    ReactDOM.render(routing, document.getElementById("root"));

  } catch (error) {
    console.log(error);
    console.error('Failed to register extension:', error.message);
    console.error('- error code:', error.code);
  }
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
