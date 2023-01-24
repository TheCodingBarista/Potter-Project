import React, { useState } from "react";
import House from './House';

function Student({ student }) {
    const { name, image, house} = student;
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div>
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
                <button onClick={handleClick} className="button">
                    Sort me!
                </button>
                <br></br><br></br>
                <div style={{ display: toggle ? 'none' : 'block' }} className="box">
                    <House house={house} />
                </div >
                <br></br><br></br>
        </div>
    )
}

export default Student;
