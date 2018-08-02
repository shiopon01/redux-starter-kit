import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../utils/logo.svg'

const Header = () => (
  <div style={css.header}>
    <header style={css.appHeader}>
      <img src={logo} style={css.appLogo} alt="logo" />
      <h1 style={css.appTitle}>Welcome to React/Redux starter kit</h1>
    </header>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/todo">TODO</Link>
      </li>
    </ul>
  </div>
)

const css = {
  header: {
    marginBottom: '10px',
  },

  appHeader: {
    textAlign: 'center',
    backgroundColor: '#2C3761',
    padding: '10px',
    color: 'white',
  },

  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
  },

  appTitle: {
    fontSize: '1.5em',
  },
}

export default Header
