import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import {
  BrowserRouter as Router, // localhost:3000/home
  // HashRouter as Router, // localhost:3000/#/home <- URL Fragment
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import injectStyle from '../utils/injectStyle';

// Routeing page import
import Home from './home';
import Todo from './todo';

class App extends Component {
  constructor(props) {
    super(props);
    const keyframesStyle = myKeyframeStyle;
    injectStyle(keyframesStyle);
  }

  // Create your application routing
  render() {
    const history = createHistory();

    return (
      <Router>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todo" component={Todo} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Router>
    );
  }
}

const myKeyframeStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;

export default App;
