import React from 'react';
import './Homepage.css'
import true_friends from '../undraw2/true_friends.png';
import { Link } from 'react-router-dom';
class Homepage extends React.Component {

    render() {
        return (
            <div className="homepage">
                <div className="homepageHeaders">
                    <h1>Welcome to Bubl</h1>
                    <h4>A friendly platform for students!</h4>
                    <span>Let's get started by creating an account!</span>
                    <br></br>
                    <Link to="/signup"><button>Create an Account</button></Link>
                    <br></br><span>Have an account already?</span><br></br>
                    <span><Link to="/login"><button>Log In</button></Link></span>
                </div>
                <img src={true_friends} alt="True friends homepage" />
            </div>
        )
    }
}


export default Homepage;