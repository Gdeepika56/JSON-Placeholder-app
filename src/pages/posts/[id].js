import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function PostDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState({});

    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => setPost(response.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    console.log(post);

    if (!post) return <p>Loading.....</p>;

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail;