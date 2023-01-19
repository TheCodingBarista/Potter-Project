import React, { useState, useEffect } from "react";
import Student from "./Student";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
      <div class="carousel">
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
                    <Student key={student.id} student={student} />
                ))}
            </Carousel>
            </div>
    );
}


export default Queue;