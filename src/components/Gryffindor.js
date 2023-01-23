import React from "react";

function Gryffindor({ house }) {
    return (
        <div className="gryffindor">
            <h4>
                <strong>
                    {house}!!!
                </strong>
            </h4>
        </div>
    )
};

export default Gryffindor;