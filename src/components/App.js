import React, { Component } from 'react'
import injectStyle from '../unit/injectStyle'
import logo from '../unit/logo.svg'

// containers
import { AddTodo, VisibleTodoList } from '../containers'

// components
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)

    const keyframesStyle = myKeyframeStyle
    injectStyle(keyframesStyle)

    this.state = {
      style: myStyles
    }
  }

  render() {
    const { style } = this.state

    return (
      <div style={style.app}>
        <header style={style.appHeader}>
          <img src={logo} style={style.appLogo} alt="logo" />
          <h1 style={style.appTitle}>Welcome to React/Redux starter kit</h1>
        </header>
        <p style={style.appIntro}>
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    )
  }
}

const myKeyframeStyle = `
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`

const myStyles = {
  app: {
    textAlign: 'center'
  },

  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px'
  },

  appHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white'
  },
  
  appTitle: {
    fontSize: '1.5em'
  },
  
  appIntro: {
    fontSize: 'large'
  },
}

export default App
