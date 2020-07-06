import React, { useContext, useState } from 'react'
import { StudentContext } from '../data/student/StudentContext'



export default function AddStudent() {

    const [name, setName] = useState('');
    const [studentClass, setStudentClass] = useState(1);
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState(1);
    const [gpa, setGpa] = useState(1);

    const { createStudent } = useContext(StudentContext)

    const submitForm = (e) => {
        e.preventDefault();

        const newStudent = {
            id: Math.floor(Math.random() * 1000),
            name,
            student_class: studentClass,
            gender,
            age,
            gpa
        }
        createStudent(newStudent);

    }
    return (
        <div>
            <h3>
                Add Student
            </h3>

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
        </div>
    )
}
