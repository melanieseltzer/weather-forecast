import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import rootReducer from './reducers';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
  @import url('https://fonts.googleapis.com/css?family=Pacifico');

  * {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body,
  html {
    font-family: 'Nunito', Arial;
    font-size: 16px;
    height: 100%;
  }
  
  @-webkit-keyframes rotation {
      from {-webkit-transform: rotate(0deg);}
      to   {-webkit-transform: rotate(359deg);}
  }

  .has-float-label {
    position: relative;
  }
  .has-float-label label, .has-float-label > span {
    position: absolute;
    left: 15px;
    top: 5px;
    cursor: text;
    font-size: 75%;
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input {
    font-size: inherit;
  }
  .has-float-label input::-webkit-input-placeholder {
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input:-ms-input-placeholder {
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input::-ms-input-placeholder {
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input::placeholder {
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus)::-ms-input-placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus)::placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus) + * {
    font-size: 120%;
    opacity: .5;
    top: 20px;
  }
`

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));