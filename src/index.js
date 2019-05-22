import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';  

import thunk from 'redux-thunk';
import './index.css';
import App from './App';


const store = createStore(reducer, applyMiddleware(thunk));



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));