// @flow
import 'react-hot-loader/patch';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
