import React from "react";

function Student({ student }) {
    const { name, gender, house, image } = student;

    return (
        <div className="gallery-cell">
                <img 
                    src={image}
                    alt={name}
                />
                <h2>
                    <span>{name}</span>
                </h2>
                <h4>                        
                    <strong>{house}</strong>
                </h4>
        </div>

    )
}

export default Student;