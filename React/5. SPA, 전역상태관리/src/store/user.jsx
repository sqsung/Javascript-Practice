/* eslint-disable */
import React, { createContext, useState, useReducer } from 'react';

export const UserContext = createContext();
const initialUser = {
    name : 'James Sohn',
    job : 'FE Developer'
}

const userReducer = (state, action) => {
    switch(action.type) {
        case 'changeJob':
            return { ...state, job: action.text }
    
        default: 
            break;
    }
}

export default function UserStore(props) {
    const [ user, dispatch ] = useReducer(userReducer, initialUser);
    console.log (user);
    // const [job, setJob] = useState('FE Developer');
    // const user = {
    //     name: 'James',
    //     job,
    //     changeJob: (newJob) => setJob(newJob) 
    // };

    return (
        <UserContext.Provider value={dispatch}>
            {props.children}
        </UserContext.Provider>
    );
}