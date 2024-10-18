import React, {FC} from 'react';
import {IPost} from "../../models/IPost";


type PostProps = {
    post:IPost
}
const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
            {
                post.userId + ') ' + post.title
            }


        </div>
    );
};

export default Post;