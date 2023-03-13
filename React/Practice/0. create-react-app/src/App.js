/* eslint-disable */
// import UseStatePractice from './components/useState'

import React, {useState, useEffect} from 'react';

function App() {
    const [type, setType] = useState('posts');
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => {
                // if (type === 'comments') setItems(json)
                if (type === 'comments') setItems(json.map(el => el.body))
                else if (type === 'users') setItems(json.map(el => el.name))
                else if (type === 'posts') setItems(json.map(el => el.title))
            })
    }, [type]);

    return (
        <>
            <div>
                <button onClick={() => {setType('posts')}}>See Posts</button>
                <button onClick={() => {setType('users')}}>See Users</button>
                <button onClick={() => {setType('comments')}}>See Comments</button>
            </div>
            <h1>These are the {type}:</h1>
            {items.map(item => {
                return <p>{JSON.stringify(item)}</p>
            })}
        </>
    );
}

export default App;
