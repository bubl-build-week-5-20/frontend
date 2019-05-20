export const ADD_STUDENT = 'ADD_STUDENT';
export const addStudent = newStudent => {
    return {
        type: ADD_STUDENT,
        payload: newStudent
    }
}