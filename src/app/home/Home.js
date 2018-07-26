import React from 'react'
import { connect } from 'react-redux'
import logo from '../../utils/logo.svg'

// import components
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

const HomeComponent = ({ home }) => (
  <div style={css.app}>
    <header style={css.appHeader}>
      <img src={logo} style={css.appLogo} alt="logo" />
      <h1 style={css.appTitle}>Welcome to React/Redux starter kit</h1>
    </header>
    <p style={css.appIntro}>
      To get started, edit <code>src/app/home/Home.js</code> and save to reload.
    </p>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

const css = {
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

const HomeContainer = connect()(HomeComponent)

export default HomeContainer