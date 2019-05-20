import { ADD_STUDENT, } from '../actions';

const initialState = {
    students: [
        { username: 'Bobby', inBubl: false, grade: 5, comment: 'hi guys', id: 3882323 },
        { username: 'Franklin', inBubl: true, grade: 6, comment: 'hi guys', id: 3291211 }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [
                    ...state.students,
                    { username: action.payload, inBubl: false, id: Date.now() }
                ]
            }
    }
}