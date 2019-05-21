import React from 'react';
import { getUsers } from '../actions';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return(
            <div className="userCard">
                {/* {this.props.users.map(user => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <p>Age: {user.age}</p>
                        <p>Height: {user.height}</p>
                        </div>
                ))} */}
            </div>
        )
    }
}
const mapStateToProps = state => ({
        fetchingUsers: state.fetchingUsers,
        users: state.users
})

export default connect(
    mapStateToProps, 
    {getUsers})(SmurfList)