import React from "react";

function Student({ student }) {
    const { name, gender, house, image } = student;

    return (
        <div className="student">
            <h4>{name}</h4>
            <h6>{gender}</h6>
            <p>{house}</p>
            <img src={image}
            alt={name}
            width="100%"
          />
        </div>
    )
}

export default Student;