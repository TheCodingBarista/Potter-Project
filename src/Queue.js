import React, { useState, useEffect } from "react";
import Student from "./Student";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Queue() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/students")
            .then((response) => response.json())
            .then((students) => setStudents(students));
    }, []);

    return (
            <Carousel class="carousel" centerMode>
                {students.map((student) => (
                    <Student key={student.id} student={student} />
                ))}
            </Carousel>
    );
}

export default Queue;