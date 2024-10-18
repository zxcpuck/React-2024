import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

type CommentProps={
    comment:IComment
}

const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div>
            {
                comment.postId + ') ' + comment.name + ' ' + comment.body
            }
        </div>
    );
};

export default Comment;