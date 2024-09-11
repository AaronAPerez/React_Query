import { useState, useEffect } from 'react';
import axios from 'axios';




interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const AxiosFetch = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState('');


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
            .catch(error => setError(error));

    }, [])

    if (error) {
        return <p>{error}</p>
    }


    return (
        <>

            <div>Posts</div>

            <ul>

                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}

            </ul>

        </>
    )
}

export default AxiosFetch