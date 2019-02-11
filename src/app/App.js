import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../share/Header';
import injectStyle from '../utils/injectStyle';

// Routeing page import
import Home from './home';
import Todo from './todo';

const keyframesStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;

class App extends Component {
  constructor(props) {
    super(props);
    injectStyle(keyframesStyle);
  }

  // Create your application routing
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </div>
    );
  }
}

export default App;
