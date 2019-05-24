import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_ABSOLUTE_FAILURE,
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL,
    ADD_USERS_START, ADD_USERS_SUCCESS, ADD_USERS_FAIL,
    FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAIL,
    ADD_POST_START, ADD_POST_SUCCESS, ADD_POST_FAIL,
    FETCH_POST_START, FETCH_POST_SUCCESS, FETCH_POST_FAIL,
    DELETE_POST_START, DELETE_POST_SUCCESS, DELETE_POST_FAIL,
    FETCH_SCHOOLDATA_START, FETCH_SCHOOLDATA_SUCCESS, FETCH_SCHOOLDATA_FAIL,
    FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL

} from '../actions';

const intitialState = {
    users: [],
    fetchingUsers: false,
    addingUsers: false,
    isLoggingIn: false,
    error: null,
    schools: [],
    fetchingSchools: false,
    fetchingSchoolData: false,
    schoolData: [],
    addingPost: false,
    posts: [],
    fetchingPosts: false,
    deletePost: false,
    fetchingComments: false,
    comments: []
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
        case FETCH_SCHOOLDATA_START:
            return {
                ...state,
                fetchingSchoolData: true,
                error: ''
            }
        case FETCH_SCHOOLDATA_SUCCESS:
            return {
                ...state,
                fetchingSchoolData: false,
                schoolData: action.payload
            }
        case FETCH_SCHOOLDATA_FAIL:
            return {
                ...state,
                fetchingSchoolData: false,
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
            debugger;
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
        case DELETE_POST_START:
            return {
                ...state,
                deletePost: true,
                error: ''
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                deletePost: false,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case DELETE_POST_FAIL:
            return {
                ...state,
                deletePost: false,
                error: action.payload
            }
        // case FETCH_COMMENTS_START:
        //     return {
        //         ...state,
        //         fetchingComments: true,
        //         error: ''
        //     }
        // case FETCH_COMMENTS_SUCCESS:
        //     // debugger;
        //     // console.log(payload)
        //     // let posts = state.posts.map(post => {
        //     //     if(post.id === action.payload[0].FK_post_id){
        //     //         post.comments = action.payload;
        //     // }})
        //     return {
        //         ...state,
        //         fetchingComments: false,
        //         comments: action.payload
        //     }
        // case FETCH_COMMENTS_FAIL:
        //     return {
        //         ...state,
        //         fetchingComments: false,
        //         error: action.payload
        //     }

        default:
            return state;
    }
}

export default reducer;