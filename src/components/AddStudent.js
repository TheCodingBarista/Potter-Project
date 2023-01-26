import React from "react";
import StudentForm from "./StudentForm.js";

function AddStudent() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/students")
          .then((response) => response.json())
          .then((students) => setStudents(students));
        }, []);

    function handleAddStudent(newStudent) {
      setStudents([...students, newStudent]);
    }

    return (
        <StudentForm onAddStudent={handleAddStudent} />
    );
}

export default AddStudent;