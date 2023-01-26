import React from "react";
import Gryffindor from "./houses/Gryffindor";
import Hufflepuff from "./houses/Hufflepuff";
import Ravenclaw from "./houses/Ravenclaw";
import Slytherin from "./houses/Slytherin";


function House({ house }) {
    switch (house) {
        case "gryffindor":
          return <Gryffindor house={house} />;
        case "hufflepuff":
            return <Hufflepuff house={house} />;
        case "ravenclaw":
            return <Ravenclaw house={house} />;
        case "slytherin":
              return <Slytherin house={house} />;
        default:
          return null;
      }
  };
  
  export default House;