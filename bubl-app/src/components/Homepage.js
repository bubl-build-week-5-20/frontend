import React from 'react';
import './Homepage.css'
import true_friends from '../undraw/true_friends.png';
class Homepage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepageHeaders">
                    <h1>Welcome to Bubl</h1>
                    <h4>The best social media for students!</h4>
                </div>
                <img src={true_friends} />
            </div>
        )
    }
}


export default Homepage;