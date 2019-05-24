import React from 'react';
import { getSchools, getSchoolData } from '../actions';
import { connect } from 'react-redux';
import './Schools.css';

class Schools extends React.Component {

    componentDidMount() {
        this.props.getSchools();
        this.props.getSchoolData();
    }

    render() {
        return (
            <div className="schoolList">
                {this.props.schools.map(school => (
                    <div key={school.id}>
                        <h1>{school.school_name}</h1>
                        {this.props.schoolData.map(data => (
                            <div key={data.id}>
                                <p>Bubl: {data.bubl_name}</p>
                                <p>Max students allowed: {data.max_students_allowed}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    fetchingSchools: state.fetchingSchools,
    fetchingSchoolData: state.fetchingSchoolData,
    schools: state.schools,
    schoolData: state.schoolData
})

export default connect(
    mapStateToProps,
    { getSchools, getSchoolData })(Schools)