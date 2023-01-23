import React from "react";
import Gryffindor from "./Gryffindor";
import Hufflepuff from "./Hufflepuff";
import Ravenclaw from "./Ravenclaw";
import Slytherin from "./Slytherin";


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