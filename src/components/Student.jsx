import React, {useContext}  from 'react'
import { StudentContext } from '../data/student/StudentContext'



export default function Student({student}) {
    const { deleteStudent } = useContext(StudentContext)
    return (
        <div className="student-item">
            Name : {student.name}
            <br/>
            Gender : {student.gender}
            <br/>
            Class : {student.class}
            <br/>
            GPA : {student.gpa}
        </div>
    )
}
