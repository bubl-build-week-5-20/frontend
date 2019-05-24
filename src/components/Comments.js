import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';

class Comments extends React.Component {

    componentDidMount() {
        this.props.getComments();
    }

    render() {
        return (
            <div>
                <p>{this.props.comments.map(comment =>(
                    <div key={comment.id}>
                        {comment.body}
                        {comment.author}
                    </div>
                ))}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    fetchingComments: state.fetchingComments,
    comments: state.comments
    
})

export default connect(
    mapStateToProps,
    { getComments })(Comments)