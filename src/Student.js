import React, { useState } from "react";
import House from './House';

function Student({ student }) {
    const { name, image, house} = student;
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div class="carousel-cell">
                <br></br>
                <img 
                    src={image}
                    alt={name}
                />
                <br></br><br></br>
                <h2>
                    <span>{name}</span>
                </h2>
                <br></br><br></br>
                <button onClick={handleClick} class="button">
                    Sort me!
                </button>
                <div style={{ display: toggle ? 'none' : 'block' }} class="box">
                    <House house={house} />
                </div>
                <br></br><br></br>
        </div>
    )
}

export default Student;
