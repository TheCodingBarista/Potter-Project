import React from 'react';
import Card from 'react-bootstrap/Card';

function StudentCard({ student }) {
    const { name, house, image } = student;

    return (
        <Card className="card text-center col-md-3 justify-content-center">
            <Card.Img className="img" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{house}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;