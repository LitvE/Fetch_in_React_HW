import React, { useEffect, useState } from 'react'
import UserItem from '../UserItem';


export default function UserList (props) {
    
    const [users, setUsers] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    function load (){
        const options = {
            results: 10,
            seed: 'abc'
        }

        fetch(`https://randomuser.me/api/?results=${options.results}&seed=${options.seed}&page=${currentPage}`)
            .then((response) => response.json())
            .then(({ results }) => setUsers(results));
    }

    useEffect(() => {
        load();
    }, [currentPage]);

    const mapUser = (user) => {
        return <UserItem key={user.login.uuid} user={user} />
    }

    const btnPrevFunc = (e) =>{
        if(currentPage >1) {
            let prevPage = currentPage - 1 ;
            console.log(prevPage);
            setCurrentPage(prevPage);
        };
        //load();
    }
    
    const btnNextFunc = (e) =>{
        let nextPage = currentPage + 1;
        console.log(nextPage);
        setCurrentPage(nextPage);
        //load();
    }

    return (
        <div>
            {isError && <div>Ошибка загрузки данных...</div>}
            <ul>{users.map(mapUser)}</ul>
            <div id="btnDiv">
                <button onClick={btnPrevFunc}>Prev</button>
                <button onClick={btnNextFunc}>Next</button>
            </div>
        </div>
    )
}

