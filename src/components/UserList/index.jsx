import React, { useEffect, useState } from 'react'
import UserItem from '../UserItem';
import styles from './UserList.module.scss';


export default function UserList (props) {
    
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    function load (){
        const options = {
            results: 10,
            seed: 'abc'
        }

        try{
            setIsFetching(true);
            fetch(`https://randomuser.me/api/?results=${options.results}&seed=${options.seed}&page=${currentPage}`)
            .then((response) => response.json())
            .then(({ results }) => setUsers(results));
        } catch(e){
            setIsError(true);
        }
        finally{
            setIsFetching(false);
        }
  
    }

    useEffect(() => {
        load();
    });

    const mapUser = (user) => {
        return <UserItem key={user.login.uuid} user={user} />
    }

    const btnPrevFunc = (e) =>{
        if(currentPage >1) {
            let prevPage = currentPage - 1 ;
            setCurrentPage(prevPage);
        };
    }
    
    const btnNextFunc = (e) =>{
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    }

    return (
        <div>
            {isError && <div>Ошибка загрузки данных...</div>}
            {isFetching && <div>Загрузка данных...</div>}
            <ul className={styles.list}>{users.map(mapUser)}</ul>
            <div className={styles.btnDiv}>
                <button onClick={btnPrevFunc}>Prev</button>
                <button onClick={btnNextFunc}>Next</button>
            </div>
        </div>
    )
}

