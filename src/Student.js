import React from "react";

function Student({ student }) {
    const { name, gender, house, image } = student;

    return (
        <div class="row active-with-click">
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div className="student" class="material-card Red">
                    <img class="img-responsive" src={image}
                    alt={name}
                    width="30%"
                    />
                    <h2>
                        <span>{name}</span>
                    </h2>
                    <h4>                        
                        <strong>{house}</strong>
                    </h4>
                </div>
            </div>
        </div>

    )
}

export default Student;