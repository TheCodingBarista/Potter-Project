import React from "react";
import classNames from "classnames";
import { useState } from "react";

function Student({ student }) {
    const { name, image, house } = student;

    return (
        <div class="carousel-cell">
                <img 
                    src={image}
                    alt={name}
                />
                <br></br>
                <h2>
                    <span>{name}</span>
                </h2>
        </div>
    )
}

export default Student;