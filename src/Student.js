import React from "react";
import classNames from "classnames";
import { useState } from "react";

function Student({ student }) {
    const { name, image, house } = student;
    
    return (
        <div class="carousel-cell slide">
                <img 
                    src={image}
                    alt={name}
                />
                <br></br><br></br>
                <h2>
                    <span>{name}</span>
                </h2>
               <br></br>
                <h4><strong>{house}</strong></h4>
                <br></br><br></br>
        </div>
    )
}

export default Student;