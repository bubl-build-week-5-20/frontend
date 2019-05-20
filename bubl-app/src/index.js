import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import Login from './components/Login';
import thunk from 'redux-thunk';
import './index.css';
import PrivateRoute from './PrivateRoute';
import SignupForm from './components/SignupForm'
import SignUpList from './components/SignUpList';


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <NavBar className="navbar" />
                </header>
                <div className="test">
                    <SignUpList />
                </div>
            </div>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignupForm} />
            <PrivateRoute exact path="/protected" />
        </Router>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));