import React , { createContext, useReducer} from 'react';
import StudentReducer from './StudentReducer'

const initialState = {
    students : [
        {   
            id : '1',
            name : 'Mark Boucher',
            gender : 'Male',
            age : 12,
            siblings : [
                "Mark's brother",
                "Mark's sister"
            ],
            gpa : 3.5,
            class : 4
        },
        {   
            id : '2',
            name : 'Steven Smith',
            gender : 'Male',
            age : 12,
            siblings : [
                "Steve's brother",
                "Steve's sister"
            ],
            gpa : 3.3,
            class : 4
        },
        {   
            id : '3',
            name : 'Sarah taylor',
            gender : 'Female',
            age : 11,
            siblings : [
                "Sarah's brother",
                "Sarah's sister"
            ],
            gpa : 3.5,
            class : 4
        },
        {   
            id : '4',
            name : 'Virat Kohli',
            gender : 'Male',
            age : 13,
            siblings : [
                "Virat's brother",
                "Virat's sister"
            ],
            gpa : 3.5,
            class : 4
        },
        {   
            id : '5',
            name : 'Suzie Bates',
            gender : 'Female',
            age : 11,
            siblings : [
                "Suzie's brother",
                "Suzie's sister"
            ],
            gpa : 3.5,
            class : 4
        },
        {   
            id : '6',
            name : 'Jason Roy',
            gender : 'Male',
            age : 12,
            siblings : [
                "Jason's brother",
                "Jason's sister"
            ],
            gpa : 4.1,
            class : 6
        },
        {   
            id : '7',
            name : 'Mithali Raj',
            gender : 'Female',
            age : 12,
            siblings : [
                "Mithali's brother",
                "Mithali's sister"
            ],
            gpa : 3.5,
            class : 4
        }
    ]
}



export const StudentContext = createContext(initialState);

export const StudentProvider = ({children}) => {
    const [state, dispatch] = useReducer(StudentReducer, initialState);

    function deleteStudent(id){
        // call api here
        dispatch({
            type : 'DELETE_STUDENT',
            payload : id
        })   
    }

    function createStudent(studentData){
        // call api here
        dispatch({
            type : 'CREATE_STUDENT',
            payload : studentData
        })
    }

    function updateStudent(studentData){
        dispatch({
            type : 'UPDATE_STUDENT',
            payload : studentData  
        })
    }

    return (
        <StudentContext.Provider value = {
            {
                students : state.students,
                deleteStudent,
                createStudent,
                updateStudent
            }
        }>
            {children}
        </StudentContext.Provider>
    )
}

