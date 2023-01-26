import React from 'react';
import Card from 'react-bootstrap/Card';

function StudentCard({ student, onDeleteStudent }) {
    const { name, house, image } = student;

    function handleDeleteClick() {
        fetch(`http://localhost:3001/students/${student.id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => onDeleteStudent(student));
  }

    return (
        <Card className="card text-center col-md-3 justify-content-center">
            <Card.Img className="img" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{house}</Card.Text>
                <button className="remove" onClick={handleDeleteClick}>Delete</button>
            </Card.Body>
        </Card>
    );
}

export default StudentCard;