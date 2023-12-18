'use client';

import Link from 'next/link';

const PostInfo = ({ post }) => {
    return (
        <div>
            <Link href={'/'}>Back</Link>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostInfo;
