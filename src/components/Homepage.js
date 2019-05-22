import React from 'react';
import './Homepage.css'
import true_friends from '../undraw/true_friends.png';
import { BrowserRouter as NavLink } from 'react-router-dom';
class Homepage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepageHeaders">
                    <h1>Welcome to Bubl</h1>
                    <h4>A friendly platform for students!</h4>
                    <span>
                    <span>Let's get started by creating an account!</span>
                    <br></br>
                    </span>

                    <button>Create an Account</button>
                    <br></br><span>Have an account already?</span><br></br>
                    <span><NavLink href="/signup"><button>Log In</button> </NavLink>
                    </span>
                </div>
                <img src={true_friends} />
            </div>
        )
    }
}


export default Homepage;