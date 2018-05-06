import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body,
  html {
    font-family: 'Open Sans', Arial;
    font-size: 16px;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  input,
  button {
    padding: 1em;
  }

  svg {
    height: 150px;
  }

  table {
    margin: 0 auto;
  }

  td:first-of-type,
  td:first-of-type > div {
    height: 200px;
    width: 250px;
  }
`

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));