import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostWQuery = () => {

    const fetchPosts = () =>
        axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data);

    const { data: posts, error, isLoading } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    });



    return (
        <>

            <div>Posts</div>
            {isLoading ? <p>Loading......</p> : null}
            {error ? <p>{error.message}</p> : null}


            <ul>
                {posts?.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </>
    )
}

export default PostWQuery