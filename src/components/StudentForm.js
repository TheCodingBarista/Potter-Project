import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function StudentForm({onAddStudent}) {
    const [formData, setFormData] = useState({
        name: "",
        house: "",
    });

    function handleChange(event) {
        setFormData({ 
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    function handleSubmit() {
        const newStudent = {
            name: formData.name,
            house: formData.house,
        };
        
        fetch("https://localhost:3001/students", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then(response => response.json())
            .then(onAddStudent);
    }
    
    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
             <Form.Group widths="equal">
                <h3>Add a Student</h3>
                <Form.Input
                    className="input"
                    fluid label="Name" 
                    placeholder="Roonil Wazlib" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Form.Input
                    className="input"
                    fluid label="House" 
                    placeholder="Thunderbird" 
                    name="house"
                    value={formData.house}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default StudentForm;
