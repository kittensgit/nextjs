import axios from 'axios';

import Posts from '@/app/components/Posts';

const fetchPosts = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
};

const getData = async () => {
    const response = await axios.get('http://localhost:3000/api/data');
    return response.data;
};

export default async function Home() {
    const posts = await fetchPosts();
    const obj = await getData();
    return (
        <div>
            <h1>Main page</h1>
            <p>{obj.name}</p>
            <Posts posts={posts} />
        </div>
    );
}
