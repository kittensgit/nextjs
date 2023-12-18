import axios from 'axios';

export default async function Post({ params }) {
    const fetchPost = async () => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        );
        return response.data;
    };

    const post = await fetchPost();
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}
