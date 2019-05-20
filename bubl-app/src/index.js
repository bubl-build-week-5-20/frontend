import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

import './index.css';

const store = createStore(reducer);

function App() {
    return (
        <div className="App">
            <header>
                <NavBar className="navbar" />
            </header>
            <div className="test">
                <UserList />
            </div>
        </div>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));