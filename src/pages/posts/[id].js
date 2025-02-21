import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function PostDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState({});

    

}

export default PostDetail;