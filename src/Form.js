import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        house: "",
    });

    function handleSubmit(event) {
        event.preventDefault;
        }
    };

    fetch("https://localhost:3001/students")
    method: 

    return (
        <div>
            <h3>Find a Student</h3>
            <Form>
                <input
                    name="name"
                    placeholder="Roonil Wazlib"
                    value={formData.name}
                >
                </input>
                <input
                    name="house"
                    placeholder="Thunderbird"
                    value={formData.house}
                >
                </input>
            </Form>
        </div>
    )
}

export default Form;
