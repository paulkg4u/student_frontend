const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'DELETE_STUDENT':
            return { 
                ...state,
                students : state.students.filter(student => student.id !== action.payload)
            }

        case 'ADD_STUDENT':
            return {
                ...state,
                students : [action.payload, ...state.students]
            }
        
        case 'UPDATE_STUDENT':
            return {
                ...state,
                students : state.students.map(student => {
                    if(student.id === action.payload.id){
                        return action.payload
                    }else{
                        return student
                    }
                })
            }
        default:
            return state
    }
}
