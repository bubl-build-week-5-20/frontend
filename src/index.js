import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';  
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk, logger)));



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));