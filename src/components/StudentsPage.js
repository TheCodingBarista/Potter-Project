import React, { useState, useEffect } from "react";
import Student from "./Student";
import StudentForm from "./StudentForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "semantic-ui-react";

function StudentsPage() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/students")
            .then((response) => response.json())
            .then((students) => setStudents(students));
    }, []);

    function handleAddStudent(newStudent) {
      setStudents([...students, newStudent]);
    }

    return (
      <Container>
        <StudentForm onAddStudent={handleAddStudent} />
        <div>
            {students.map((student) => (
                <Student student={student} />
            ))}
        </div>
      </Container>
    )
};

export default StudentsPage;