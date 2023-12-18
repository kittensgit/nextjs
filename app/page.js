import axios from 'axios';

import Posts from '@/app/components/Posts';

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
            <Posts posts={posts} />
        </div>
    );
}
