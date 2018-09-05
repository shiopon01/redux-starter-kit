import React from 'react';

const HomeComponent = () => (
  <div style={css.app}>
    <div style={css.container}>
      <p style={css.appIntro}>
        To get started, edit <code>src/app/home/Home.js</code> and save to reload.
      </p>
      <div style={css.box}>
        <p style={css.message}>
          Hi.
          <br />
          This is React/Redux starter kit.
          <br />
          repository link:{' '}
          <a href="https://github.com/shiopon01/redux-starter-kit">
            https://github.com/shiopon01/redux-starter-kit
          </a>
        </p>
      </div>
    </div>
  </div>
);

const css = {
  appIntro: {
    fontSize: 'large',
    gridColumn: '2',
    gridRow: '1'
  },

  box: {
    gridColumn: '2',
    gridRow: '1',
    padding: '0.5em 1em',
    margin: '2em 0',
    width: '80vw',
    maxWidth: '100%',
    color: '#5d627b',
    background: 'white',
    borderTop: 'solid 5px #5d627b',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.22)'
  }
};

export default HomeComponent;
