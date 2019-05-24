import React from 'react';
import { addUser } from '../actions';
import { connect } from 'react-redux';
import CarouselPage from './Carousel';
import './Signup.css';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    addUser = e => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }
        this.props.addUser(newUser);

        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="signup">
                    <form onSubmit={this.addUser} className="signupForm">
                        <header className="signupHeader"><h1>Join now!</h1></header>
                        <input
                            placeholder="Create a Username"
                            type="text"
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <input
                            placeholder="Create a Password"
                            type="text"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                        {/* <input
                        placeholder="Role (student or admin)"
                        type="text"
                        name="role"
                        className="form-control"
                        value={this.state.role}
                        onChange={this.handleChanges}
                    /> */}
                        <button className="btn btn-primary btn-lg">Sign Up</button>
                        <Link to="/login"><p className="redirectSignup">Already a member? Login here!</p></Link>
                    </form>
                </div>
                <CarouselPage />

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingUser: state.addUser,
        error: state.error
    }
}

export default connect(
    mapStateToProps, { addUser }
)(SignupForm)