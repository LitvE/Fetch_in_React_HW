import React from 'react';
import styles from './UserItem.module.scss';

const UserItem = (props) => {

    const {user} = props;

    return (
        <li className={styles.item}>
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