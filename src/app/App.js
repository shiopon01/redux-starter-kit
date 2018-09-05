import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Header from '../share/Header';
import injectStyle from '../utils/injectStyle';

// Routeing page import
import Home from './home';
import Todo from './todo';

class App extends Component {
  constructor(props) {
    super(props);
    injectStyle(keyframesStyle);
  }

  // Create your application routing
  render() {
    return (
      <div style={css.container}>
        {/* <Header /> */}
        <div style={css.outer}>
          <div style={css.left}>
            <div style={css.navbar} />
          </div>
          <div style={css.right}>
            <div style={css.body}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/todo" component={Todo} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const keyframesStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;

const css = {
  container: {
    background: 'green',
    lineHeight: 1.8,
    position: 'relative',
    textRendering: 'auto'
  },

  outer: {
    display: 'flex',
    width: '100%'
  },

  left: {
    flex: '0 0 80px',
    width: '84px'
  },

  navbar: {
    position: 'fixed',
    zIndex: '123',
    width: '80px',
    height: '100%',
    minHeight: '100%',
    backgroundColor: 'orange',
    color: 'white'
  },

  right: {
    flex: 100,
    width: '100%',
    overflow: 'hidden'
  },

  body: {
    background: 'white',
    width: '100%',
    minHeight: '500px'
  }
};

export default App;
