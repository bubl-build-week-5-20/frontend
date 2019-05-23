import React from 'react';
import { getSchools } from '../actions';
import { connect } from 'react-redux';
import './Schools.css';

class Schools extends React.Component {

    componentDidMount() {
        this.props.getSchools();
    }

    render() {
        return (
            <div className="schoolList">
                {this.props.schools.map(school => (
                    <div key={school.id}>
                        <h1>{school.school_name}</h1>
                        <button>Click Here for more info</button>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    fetchingSchools: state.fetchingSchools,
    schools: state.schools
})

export default connect(
    mapStateToProps,
    { getSchools })(Schools)