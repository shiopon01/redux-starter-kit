import React, { Component } from 'react'
import logo from './logo.svg'
// import './App.css' // Possible to import css :)

// containers
import { AddTodo, VisibleTodoList } from './containers'

// components
import { Footer } from './components'

class App extends Component {
  render() {
    return (
      <div style={style.app}>
        <header style={style.appHeader}>
          <img src={logo} style={style.appLogo} alt="logo" />
          <h1 style={style.appTitle}>Welcome to React/Redux starter kit</h1>
        </header>
        <p style={style.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

let style = {
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

export default App;