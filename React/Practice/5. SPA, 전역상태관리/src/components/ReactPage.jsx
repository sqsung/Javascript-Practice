/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

export default function ReactPage() {
    const [number, setNumber] = useState(0);

    async function fetcher() {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return result.data;
    }

    const { data: posts, error } = useSWR('posts', fetcher);

    if (error) return <div>failed to load</div>
    if (!posts) return <div>loading...</div>

    // const [posts, setPosts] = useState([]); 

    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         return result.data;
    //     }

    //     fetchData().then(result => {
    //         setPosts(result);
    //     });
    // }, []);

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            {posts.map(post => (
                <Link
                    to={`${post.id}`}
                    key={post.id}
                    style={{ display: 'block', margin: '1rem 0' }}
                >
                    {post.title}
                </Link>
            ))}
            {/* <Outlet /> */}
        </div>
    );
}