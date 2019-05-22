import React from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: '',
            user: {}
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({ user })
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    addPost = e => {
        e.preventDefault();
        const newPost = {
            name: this.state.user.author,
            post: this.state.post,
        }
        this.props.addPost(newPost);

        this.setState({
            post: '',
        })
    }

    render() {
        return (
            <div className="postForm">
                <form onSubmit={this.addPost}>
                    <input
                        onChange={this.handleChanges}
                        placeholder="post"
                        name="name"
                        type='text'
                        value={this.state.post}
                    />
                    <button type="submit">Add Post</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingPost: state.addingPost,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    {addPost})
    (Posts);