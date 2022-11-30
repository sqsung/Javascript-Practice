/* eslint-disable */
import React, { useState } from 'react';

export default function UseStatePractice() {
    const [job, setJob] = useState('FE Developer');
    const [age, setAge] = useState(0);

    return (
        <div>
            <p style={{ fontSize: '20px' }}>1. useState Examples</p>
            <p>Your job is: <span style={{ fontSize: '16px', color: 'blue' }}>{job}</span></p>
            <button onClick={() => setJob('Lawyer')}>
                Click to become a lawyer!
            </button>
            <button onClick={() => setJob('FE Developer')}>
                Click to become a FE Developer!
            </button>

            <p>Your age is: <span style={{ color: "blue" }}>{age}</span></p>
            <button onClick={() => setAge(age => age + 1)}>
                Increase
            </button>
            <button onClick={() => setAge(age => age - 1)}>
                Decrease
            </button>
        </div >
    )
}