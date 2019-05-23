import React from 'react';
import { addPost, getPosts } from '../actions';
import { connect } from 'react-redux';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: '',
                body: '',
                FK_bubl_id: this.props.bubl_id
            }
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({ user })
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value
            }
        })
    }

    addPost = e => {
        e.preventDefault();
        const newPost = {
            title: this.state.post.title,
            body: this.state.post.body,
            FK_bubl_id: this.state.post.FK_bubl_id
        }
        this.props.addPost(newPost);
        this.props.getPosts();

        this.setState({
            post: {
                title: '',
                body: '',
            }
        })
    }

    refreshPage = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className="postForm">
                <form onSubmit={this.addPost}>
                    <input
                        onChange={this.handleChanges}
                        placeholder="title"
                        name="title"
                        type='text'
                        value={this.state.post.title}
                    />
                    <input
                        onChange={this.handleChanges}
                        placeholder="body"
                        name="body"
                        type='text'
                        value={this.state.post.body}
                    />
                    <button type="submit" onClick={this.refreshPage}>Add Post</button>
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
    { addPost, getPosts })(Posts);