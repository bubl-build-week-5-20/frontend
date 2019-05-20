import React from 'react';
import { connect } from 'react-redux';

import { addStudent, } from '../actions';

class UserList extends React.Component {
    state = {
        newStudent: ''
    }

    handleChanges = e => {
        this.setState({ newStudent: e.target.value});
    }

    addStudent = e => {
        e.preventDefault();
        this.props.addStudent(this.state.newStudent)
        this.setState({ newStudent: '' })
    }

    render() {
        return (
            <React.Fragment>
                <div className="user-list">
                    <input
                        type="text"
                        value={this.state.newStudent}
                        onChange={this.handleChanges}
                        placeholder="Desired Username" />
                        <button onClick={this.addStudent}>Add Student</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students
    };
};

export default connect(
    mapStateToProps,
    { addStudent, })(UserList)