import React, {useContext}  from 'react'
import { StudentContext } from '../data/student/StudentContext'
import { NavLink } from 'react-router-dom';


export default function Student({student}) {
    const { deleteStudent } = useContext(StudentContext)
    return (
        <div className="student-item">
            Name : {student.name}
            <br/>
            Gender : {student.gender}
            <br/>
            Class : {student.student_class}
            <br/>
            GPA : {student.gpa}
            <br/>
            <div className="student-controls">
                <button onClick={() => deleteStudent(student.id)} className="delete-btn">Delete Student</button>
                <NavLink to = {`/studentDetail/${student.id}`}>
                    <button  className="delete-btn">Details</button>    
                </NavLink>
                
            </div>
            
        </div>
    )
}
