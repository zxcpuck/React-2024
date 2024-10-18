import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {apiService} from "../../services/api.service";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        apiService.postService.getAll().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map((post:IPost) => (<Post post={post} key={post.id} />))
            }
        </div>
    );
};

export default Posts;