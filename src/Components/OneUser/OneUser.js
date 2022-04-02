import React from 'react';
import { Card } from 'react-bootstrap';
const OneUser = (props) => {
    const { name, email, phone, website, username, address } = props.user;
    return (
        <div className='col'>
            <Card border="primary" style={{ width: '18rem' }}>
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
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default OneUser;