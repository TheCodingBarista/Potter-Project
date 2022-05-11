import React, { useState, useEffect } from "react";
import Student from "./Student";

function Queue() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/students")
            .then((response) => response.json())
            .then((students) => console.log(students));
    }, []);

    return (
        <div>
            {students.map((student) => (
                <Student key={student.id} student={student} />
            ))}
        </div>
    );
}

export default Queue;