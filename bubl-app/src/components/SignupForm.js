import React from 'react';
import { addUser } from '../actions';
import { connect } from 'react-redux';

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
            <form onSubmit={this.addUser}>
                <h1>Join now!</h1>
                <div className="form-group">
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        placeholder="password"
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
                </div>
            </form>
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
    mapStateToProps,{addUser}
)(SignupForm)