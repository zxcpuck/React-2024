import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {apiService} from "../../services/api.service";
import Comment from "../comment/Comment";


const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        apiService.commentService.getAll().then(value => setComments(value))
    }, []);
    return (
        <div>
            {
                comments.map((comment:IComment) => (<Comment comment={comment} key={comment.id}/>) )
            }
        </div>
    );
};

export default Comments;