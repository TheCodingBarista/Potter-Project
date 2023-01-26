import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import StudentForm from "./StudentForm";
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

function StudentsPage() {
  const [students, setStudents] = useState([]);
    const cards = students.map((student) => (
        <StudentCard key={student.id} student={student}  onUpdateStudent={handleUpdateStudent} onDeleteStudent={handleDeleteStudent} />
    ));

    useEffect(() => {
        fetch("http://localhost:3001/students")
          .then((response) => response.json())
          .then((students) => setStudents(students));
        }, []);

    function handleAddStudent(newStudent) {
      setStudents([...students, newStudent]);
    }

    function handleDeleteStudent(deletedStudent) {
      const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
      setStudents(updatedStudents);
    }

      function handleUpdateStudent(updatedStudent) {
      const updatedStudents = students.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        } else {
          return student;
        }
      });
      setStudents(updatedStudents);
      }


    return (
      <Container>
        <StudentForm onAddStudent={handleAddStudent} />
        <CardGroup className= "studentsGrid row align-items-center justify-content-center container-fluid">
          {cards}
        </CardGroup>
      </Container>
    );
}

export default StudentsPage;