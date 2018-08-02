import React from 'react'

// import components
import Header from '../../shareComponents/Header'

const HomeComponent = () => (
  <div style={css.app}>
    <Header />
    <p style={css.appIntro}>
      To get started, edit <code>src/app/home/Home.js</code> and save to reload.
    </p>
  </div>
)

const css = {
  app: {
    textAlign: 'center',
  },

  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
  },

  appIntro: {
    fontSize: 'large',
  },
}

export default HomeComponent
