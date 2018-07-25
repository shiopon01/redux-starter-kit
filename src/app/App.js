import React, { Component } from 'react'
import {
  BrowserRouter as Router, // localhost:3000/home
  // HashRouter as Router, // localhost:3000/#/home <- URL Fragment
  Route
} from 'react-router-dom';
import injectStyle from '../utils/injectStyle'

import Home from './home/Home'

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

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
        </div>
      </Router>
    )
  }
}

export default App
