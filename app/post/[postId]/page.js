import axios from 'axios';

import PostInfo from '@/app/components/PostInfo';

export const generateMetadata = async ({ params }) => {
    const post = await fetchPost(params.postId);
    return {
        title: `Post ${post.id}`,
        description: post.title,
    };
};

const fetchPost = async (id) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
};

export default async function Post({ params: { postId } }) {
    const post = await fetchPost(postId);
    return (
        <div className="post">
            <PostInfo post={post} />
        </div>
    );
}
