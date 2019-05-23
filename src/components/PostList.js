import React from 'react';
import { getPosts, deletePost } from '../actions';
import { connect } from 'react-redux';
import Posts from './Posts';
import './PostList.css';

class PostList extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    }
    deletePost = (id) => {
        this.props.deletePost(id)
    }

    render() { 
        return(
            <React.Fragment>
                <Posts />
            <div className="postList">
                <h1>Posts</h1>
                {this.props.posts.map(post => (
                    <div className="postMain" key={post.id}>
                        <h2 className="postTitle">{post.title}</h2>
                        <p className="postBodyTitle">Description</p>
                        <p>{post.body}</p>
                        <h4>By: {post.author}</h4>
                        <h5>Created at: {post.created_at}</h5>
                        <button onClick={() => this.deletePost(post.id)}>Delete post</button>
                        </div>
                ))}
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
        fetchingPosts: state.fetchingPosts,
        posts: state.posts
})

export default connect(
    mapStateToProps, 
    { getPosts, deletePost })(PostList)