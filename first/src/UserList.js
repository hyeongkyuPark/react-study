import React from 'react';

function User({ user }) {
    const {username, email} = user;
    return (
        <div>
            <b>{username}</b><span>({email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'kim',
            email: 'kim@naver.com'
        },
        {
            id: 2,
            username: 'lee',
            email: 'lee@naver.com'
        },
        {
            id: 3,
            username: 'sin',
            email: 'sin@naver.com'
        },
        {
            id: 4,
            username: 'park',
            email: 'park@naver.com'
        }
    ];


    return (
        <div>
            {
                users.map(user => (<User user= {user} key={user.id} />))
            }
        </div>
    )
}

export default UserList;