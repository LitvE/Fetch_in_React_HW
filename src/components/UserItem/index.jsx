import React from 'react'

const UserItem = (props) => {

    const {user} = props;

    return (
        <li>
            <div>
                <img src={user.picture.medium} alt='user_photo'/>
            </div>
            <p>{user.name.title} {user.name.first} {user.name.last}</p>
            <p>Login: {user.login.username}</p>
            <p>E-mail: {user.email}</p>
        </li>
    )

}

export default UserItem;