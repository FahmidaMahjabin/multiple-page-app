import React from 'react';
import {  Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';


// showUserDetail 
// step1:when click on the button, a new link will generate 
// step2: in that page that user detail will show


const OneUser = (props) => {
    const {id, name, email, phone, website, username, address } = props.user;
    // const navigate = useNavigate();
    // const showUserDetail = (id) =>{
    //     const link = `/users/${id}`;
    //     navigate(link);
       
    // }
    return (
        <div className='col'>
            <Card border="primary">
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
                        address:{address.street}, {address.city}
                        <Link to = {`/users/${id}`}> See Detail </Link>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default OneUser;