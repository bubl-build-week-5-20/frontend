import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_ABSOLUTE_FAILURE,
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL,
    ADD_USERS_START, ADD_USERS_SUCCESS, ADD_USERS_FAIL,
    FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAIL,
    ADD_POST_START, ADD_POST_SUCCESS, ADD_POST_FAIL,
    FETCH_POST_START, FETCH_POST_SUCCESS, FETCH_POST_FAIL,

} from '../actions';

const intitialState = {
    users: [],
    fetchingUsers: false,
    addingUsers: false,
    isLoggingIn: false,
    error: null,
    schools: [],
    fetchingSchools: false,
    addingPost: false,
    posts: [],
    fetchingPosts: false,
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
                users: action.payload
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
                users: action.payload
            }
        case ADD_USERS_FAIL:
            return {
                ...state,
                addingUsers: false,
                error: action.payload
            }
        case FETCH_SCHOOLS_START:
            return {
                ...state,
                fetchingSchools: true,
                error: ''
            }
        case FETCH_SCHOOLS_SUCCESS:
            return {
                ...state,
                fetchingSchools: false,
                schools: action.payload
            }
        case FETCH_SCHOOLS_FAIL:
            return {
                ...state,
                fetchingSchools: false,
                error: action.payload
            }
        case ADD_POST_START:
            return {
                ...state,
                addingPost: true,
                error: ''
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                addingPost: false,
                posts: action.payload
            }
        case ADD_POST_FAIL:
            return {
                ...state,
                addingPost: false,
                posts: action.payload
            }
        case FETCH_POST_START:
            return {
                ...state,
                fetchingPosts: true,
                error: ''
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                fetchingPosts: false,
                posts: action.payload
            }
        case FETCH_POST_FAIL:
            return {
                ...state,
                fetchingPosts: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;