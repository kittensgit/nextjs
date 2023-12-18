'use client';

import Link from 'next/link';

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <div className="post">
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                    <Link href={`/post/${post.id}`}>More details</Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;
