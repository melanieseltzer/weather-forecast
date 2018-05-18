import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { injectGlobal } from 'styled-components';

import App from './components/App';
import rootReducer from './reducers';

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
    background: #fff;
    font-family: 'Nunito', Arial;
    font-size: 16px;
    height: 100%;
    @media screen and (min-width: 768px) {
      background: #F0F3F7;
    }
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
    font-size: 1.2em;
    opacity: .5;
    top: 1.2em;
  }
`;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'),
);
