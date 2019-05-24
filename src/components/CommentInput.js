import React from 'react';

class CommentInput extends React.Component {

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={props.comment}
                    placeholder="Add comment... "
                    onChange={props.changeComment}
                />
            </form>
        );
    }
};

export default CommentInput;