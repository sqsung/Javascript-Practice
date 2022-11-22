import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ReactPage() {
    const posts = [
        {
            id: 1,
            title: 'React 공부를 시작하면서',
            date: '05/01/2021'
        },
        {
            id: 2,
            title: 'CRA? Create React App!',
            date: '05/02/2021'
        },
        {
            id: 3,
            title: 'React 프로젝트에 Prettier 적용하기',
            date: '05/03/2021'
        },
        {
            id: 4,
            title: '미국 개발자들이 생각하는 React',
            date: '05/04/2021'
        },
        {
            id: 5,
            title: 'Think in React, React 사고방식 기르기',
            date: '05/05/2021'
        },
    ]


    return (
        <div>
            {posts.map(post => (
                <Link
                    to={`${post.id}`}
                    key={post.id}
                    style={ {display: 'block', margin: '1rem 0'}}
                >
                    {post.title}
                </Link>
            ))}
            {/* <Outlet /> */}
        </div>
    );
}