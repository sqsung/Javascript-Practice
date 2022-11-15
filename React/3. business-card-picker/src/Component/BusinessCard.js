import React from 'react';

export default function BusinessCard(props) {
    const {company, team, name, phoneNumber, email} = props.info
    return (
        <>
            <div>회사 : {company}</div>
            <div>부서: {team}</div>
            <div>성함 : {name}</div>
            <div>전화 : {phoneNumber}</div>
            <div>이메일 : {email}</div>
        </>
    )
}
