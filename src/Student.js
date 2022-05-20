import React from "react";

function Student({ student }) {
    const { name, gender, house, image } = student;

    return (
        <div className="gallery-cell">
            <div className="student">
                <img class="img-responsive" src={image}
                    alt={name}
                />
                <h2>
                    <span>{name}</span>
                </h2>
                <h4>                        
                    <strong>{house}</strong>
                </h4>
            </div>
        </div>

    )
}

export default Student;