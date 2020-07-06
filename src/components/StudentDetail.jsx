import React, { useContext, useState } from 'react'

import { StudentContext } from '../data/student/StudentContext'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


export default function StudentDetail(params) {
    const { students, deleteStudent, updateStudent } = useContext(StudentContext)
    const student = students.filter(student => student.id === params.userId)[0]
    const history = useHistory();
    const [editingStudent, setEditingStudent] = useState(false);

    const [name, setName] = useState(student.name);
    const [studentClass, setStudentClass] = useState(student.student_class);
    const [gender, setGender] = useState(student.gender);
    const [age, setAge] = useState(student.age);
    const [gpa, setGpa] = useState(student.gpa);
    const submitForm = (e) => {
        e.preventDefault();

        const editedStudent = {
            id: student.id,
            name,
            student_class: studentClass,
            gender,
            age,
            gpa
        }
        console.log(editedStudent)
        updateStudent(editedStudent);
        history.push("/");
    }

    return (
        <div>
            <h3>
                <NavLink to='/'>
                    <button className="delete-btn">Home</button>
                </NavLink>
                &nbsp;Student Details
            </h3>
            {
                editingStudent === false && <React.Fragment>
                    Name : {student.name}
                    <br />
            Gender : {student.gender}
                    <br />
            Class : {student.student_class}
                    <br />
            GPA : {student.gpa}
                    <br />
                </React.Fragment>
            }
            {
                editingStudent === true && <React.Fragment>
                    <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="name">
                        Student Name
                    </label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="studentClass">
                        Student Class
                    </label>
                    <input type="number" name="studentClass" id="studentClass" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="gender">
                        Gender
                    </label>
                    <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Femail</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="studentAge">
                        Student Age
                    </label>
                    <input type="number" name="studentClass" id="studentAge" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="studentClass">
                        Student GPA
                    </label>
                    <input type="number" name="studentClass" id="studentClass" value={gpa} onChange={(e) => setGpa(e.target.value)} step="0.1"/>
                </div>
                <button className="btn">Submit</button>
            </form>
                </React.Fragment>
            }
            <div className="student-controls">
                {editingStudent === true && 
                <React.Fragment>
                    <button onClick={() => setEditingStudent(false)}>Cancel</button>
                </React.Fragment>
}
                
                {editingStudent === false &&
                    <React.Fragment>
                        <button onClick={() => setEditingStudent(true)}>Edit</button>
                        <button onClick={() => { deleteStudent(student.id); history.push("/"); }} className="delete-btn">Delete Student</button>
                    </React.Fragment>
                }


            </div>
        </div>
    )
}
