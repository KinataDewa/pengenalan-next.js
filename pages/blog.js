import React from "react";

const Blog = ({ post }) => {
    return (
        <div>
            <h1>Blog Saya</h1>
            {post.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await res.json();

    return {
        props: { post }, 
    };
}

export default Blog;
