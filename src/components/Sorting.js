import React, { useState, useEffect } from "react";
import Student from "./Student";
import StudentForm from "./StudentForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from "semantic-ui-react";
import sprite from "../sprite.svg";

function Sorting() {
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
        <div className="carousel">
          <Carousel
            renderArrowNext={(clickHandler, hasNext) => {
                return (
                    hasNext && (
                        <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                            <svg>
                                <use xlinkHref={sprite + "#right"}></use>
                            </svg>
                        </button>
                )
              );
            }}
            renderArrowPrev={(clickHandler, hasNext) => {
                return (
                    hasNext && (
                        <button onClick={clickHandler} className="nav_btn nav_btn_left">
                            <svg>
                                <use xlinkHref={sprite + "#left"}></use>
                            </svg>
                        </button>
                )
              );
            }}
            statusFormatter={(currentItem, total) => {
                return (
                  <p>
                    image {currentItem} of {total}
                  </p>
                );
              }}
              renderIndicator={(clickHandler, isSelected, index) => {
                return (
                  <li
                    onClick={clickHandler}
                    className={`ind ${isSelected ? "active" : ""}`}
                    key={index}
                    role="button"
                  />
                );
              }}          
          >
                {students.map((student) => (
                    <Student student={student} />
                ))}
          </Carousel>
        </div>
      </Container>
    );
}

export default Sorting;