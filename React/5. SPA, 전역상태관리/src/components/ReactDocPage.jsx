import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ReactDocPage() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <>
            <h5 onClick={() => navigate('/')}>HOME</h5>
            <div>ReactDocPage #{params.postId}</div>
        </>
    );
}