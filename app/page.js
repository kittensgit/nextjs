import axios from 'axios';
import Link from 'next/link';

const fetchPosts = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
};

export default async function Home() {
    const posts = await fetchPosts();
    return (
        <div>
            <h1>Main page</h1>
            {posts.map((post) => (
                <div className="post">
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                    <Link href={`/post/${post.id}`}>More details</Link>
                </div>
            ))}
        </div>
    );
}
