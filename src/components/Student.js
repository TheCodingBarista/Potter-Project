import { useState } from "react";
import House from './House';

function Student({ student }) {
    const { name, house, image = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/harry-potter-hogwarts-legacy-character-creation-tease.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"} = student;
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
