import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import OneUser from '../Components/OneUser/OneUser';
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => setUsers(data.data))

    }, [])
    return (
        <div className= "row row-cols-3 g-2">
            {users.map(user => <OneUser key = {user.id} user = {user}></OneUser>)}
        </div>
    );
};

export default Users;