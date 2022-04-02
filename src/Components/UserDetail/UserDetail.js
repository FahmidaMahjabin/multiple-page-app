import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
    const {id} = useParams();
    console.log("id in userDetail:", id);
    const [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(data => setUser(data.data))
    }, [id])
    console.log(user)
    const {name, email, phone, website, username, address } = user;
    console.log(user.name, user.email)
    return (
        <Card border="primary" className = "m-5 text-center">
                <Card.Header>{username}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        email:{email}
                        <br />
                        phone:{phone}
                        <br />
                        website:{website}
                        <br />
                        address:{address?.street}, {address?.city}
                        <Link to = {`/users/${id}`}> See Detail </Link>

                    </Card.Text>
                </Card.Body>
            </Card>
    
    )
};

export default UserDetail;