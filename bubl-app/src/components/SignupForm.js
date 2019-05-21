import React from 'react';
import { addUser } from '../actions';
import { connect } from 'react-redux';
import './Signup.css';

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
                            placeholder="Choose a Username"
                            type="text"
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <input
                            placeholder="Create a password"
                            type="text"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                        {/* <input
                        placeholder="role"
                        type="text"
                        name="role"
                        className="form-control"
                        value={this.state.role}
                        onChange={this.handleChanges}
                    /> */}
                        <button className="btn btn-primary btn-lg">Sign Up</button>
                    </form>
                </div>
                <div className="signupFill"><h3>Meet other students now!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis est at arcu auctor sodales. Aliquam ultricies risus nec risus viverra, ac iaculis lectus rhoncus. Nulla augue purus, tempor sed tristique quis, lacinia sit amet urna. Mauris eget orci non nulla semper iaculis. Maecenas volutpat
                    </p>
                </div>
                <div className="signupFill"><h3>Create and grow your Bubls!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis est at arcu auctor sodales. Aliquam ultricies risus nec risus viverra, ac iaculis lectus rhoncus. Nulla augue purus, tempor sed tristique quis, lacinia sit amet urna. Mauris eget orci non nulla semper iaculis. Maecenas volutpat
                    </p>
                </div>

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