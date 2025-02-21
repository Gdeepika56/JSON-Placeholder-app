import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;