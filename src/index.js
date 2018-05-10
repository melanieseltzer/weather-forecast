import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import rootReducer from './reducers';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');
  @import url('https://fonts.googleapis.com/css?family=Pacifico');

  * {
    margin: 0;
    padding: 0;
  }
  
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
    height: 100%;
  }

  input,
  button {
    padding: 1em;
  }
  
  input:focus::-webkit-input-placeholder { color:transparent; }
  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */

  .wi {
    margin: 10px;
    transform: rotate(-10deg);
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));