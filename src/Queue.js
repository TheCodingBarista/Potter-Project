import React, { useState, useEffect } from "react";
import Student from "./Student";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sprite from "./sprite.svg";

function Queue() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/students")
            .then((response) => response.json())
            .then((students) => setStudents(students));
    }, []);

    return (
        <Carousel class="carousel"  
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
          >
                {students.map((student) => (
                    <Student key={student.id} student={student} />
                ))}
            </Carousel>
    );
}

export default Queue;