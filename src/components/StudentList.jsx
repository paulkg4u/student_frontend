import React , {useContext} from 'react'
import { StudentContext } from '../data/student/StudentContext'
import Student from './Student'



export default function StudentList() {
    const { students } = useContext(StudentContext)
    
    return (
        <div className = "student-container">
            <h3>
                Students
            </h3>
            <div className="student-list">
                {
                    students.map((student) => {
                        return <Student key={student.id} student={student}/>
                    })
                }
            </div> 
        </div>
    )
}
