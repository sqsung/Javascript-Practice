import React, { useContext } from 'react';
import { UserContext } from '../store/user';

export default function BlogPage() {
    const dispatched = useContext(UserContext);
    console.log(dispatched); 

    return (
        <div>
            <h1>Blog Page</h1>
            <button onClick={() => dispatched( {type: 'changeJob', text: 'Lawyer'})}>Change Job</button>
        </div>
    );
}