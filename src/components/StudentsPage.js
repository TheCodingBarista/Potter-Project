import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

function StudentsPage() {
  const [students, setStudents] = useState([]);
    const cards = students.map((student) => (
        <StudentCard student={student} />
    ));

    useEffect(() => {
        fetch("http://localhost:3001/students")
          .then((response) => response.json())
          .then((students) => setStudents(students));
        }, []);

    return (
      <Container>
        <CardGroup className= "studentsGrid row align-items-center justify-content-center container-fluid">
          {cards}
        </CardGroup>
      </Container>
    );
}

export default StudentsPage;