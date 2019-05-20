import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_ABSOLUTE_FAILURE,
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL,
    ADD_USERS_START, ADD_USERS_SUCCESS, ADD_USERS_FAIL
} from '../actions';

const intitialState = {
    users: [],
    fetchingUsers: false,
    addingUsers: false,
    isLoggingIn: false,
    error: null
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                error: ''
            }
        case LOGIN_ABSOLUTE_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            }
        case FETCH_USERS_START:
            return {
                ...state,
                fetchingUsers: true,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                fetchingUsers: false,
                smurfs: action.payload
            }
        case FETCH_USERS_FAIL:
            return {
                ...state,
                fetchingUsers: false,
                error: action.payload
            }
        case ADD_USERS_START:
            return {
                ...state,
                addingUsers: true,
                error: ''
            }
        case ADD_USERS_SUCCESS:
            return {
                ...state,
                addingUsers: false,
                smurfs: action.payload
            }
        case ADD_USERS_FAIL:
            return {
                ...state,
                addingUsers: false,
                error: action.payload
            }


        default:
            return state;
    }
}

export default reducer;