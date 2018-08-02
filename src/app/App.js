import React, { Component } from 'react'
import {
  BrowserRouter as Router, // localhost:3000/home
  // HashRouter as Router, // localhost:3000/#/home <- URL Fragment
  Route,
} from 'react-router-dom'
import injectStyle from '../utils/injectStyle'

// Routeing page import
import Home from './home'
import Todo from './todo'

const myKeyframeStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`

class App extends Component {
  constructor(props) {
    super(props)
    const keyframesStyle = myKeyframeStyle
    injectStyle(keyframesStyle)
  }

  // Create your application routing
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
        </div>
      </Router>
    )
  }
}

export default App
