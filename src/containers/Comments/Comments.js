import React, { Component } from 'react'
import CommentsHeader from './CommentsHeader/CommentsHeader';
import AddComment from './AddComment/AddComment';

export default class Comments extends Component {
    render() {
        return (
            <div>
                <CommentsHeader amountComments={this.props.amountComments}/>
                <AddComment />
            </div>
        )
    }
}
