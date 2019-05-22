import PrivateRoute from './PrivateRoute';
import SignupForm from './components/SignupForm'
import SignUpList from './components/SignUpList';
import Homepage from './components/Homepage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Schools from './components/Schools';
import { Route, withRouter } from 'react-router-dom';  
import React from 'react';
import PostList from './components/PostList';
import Posts from './components/Posts';

class App extends React.Component {

    render() {
    return (
            <div className="App">
                <header>
                    <NavBar className="navbar" />
                </header>
                <div className="test">
                    <SignUpList />
                </div>
            <Route path="/schools" component={Schools} />
            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignupForm} />
            <PrivateRoute path="/posts" component={PostList} />
            <Route path="/make-post" component={Posts} />
            </div>
    )
    }
}

export default withRouter(App);