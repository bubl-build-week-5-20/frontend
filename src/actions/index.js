import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
// action types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ABSOLUTE_FAILURE = 'LOGIN_ABSOLUTE_FAILURE';

export const login = creds => dispatch => { //May 16th 1:09:00
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://bublapp.herokuapp.com/api/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err.message));
}


export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const getUsers = () => dispatch => {
  dispatch ({ type: FETCH_USERS_START });
  axiosWithAuth()
    .get('https://bublapp.herokuapp.com/api/auth/login')
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAIL, payload: err})
    })
}

export const ADD_USERS_START = 'ADD_USERS_START';
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
export const ADD_USERS_FAIL = 'ADD_USERS_FAIL';

export const addUser = newUser => dispatch => {
  dispatch ({ type: ADD_USERS_START });
  axios
    .post(`https://bublapp.herokuapp.com/api/auth/register`, newUser)
    .then(res => {
      dispatch({ type: ADD_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_USERS_FAIL, payload: err});
    })
}

export const FETCH_SCHOOLS_START = 'FETCH_SCHOOLS_START';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAIL = 'FETCH_SCHOOLS_FAIL';

export const getSchools = () => dispatch => {
  dispatch ({ type: FETCH_SCHOOLS_START });
  axios
    .get('https://bublapp.herokuapp.com/api/schools')
    .then(res => {
      // const names = Object.keys(res.data);
      // console.log(names);
      dispatch({ type: FETCH_SCHOOLS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_SCHOOLS_FAIL, payload: err})
    })
}

export const FETCH_SCHOOLDATA_START = 'FETCH_SCHOOLDATA_START';
export const FETCH_SCHOOLDATA_SUCCESS = 'FETCH_SCHOOLDATA_SUCCESS';
export const FETCH_SCHOOLDATA_FAIL = 'FETCH_SCHOOLDATA_FAIL';

export const getSchoolData = (id) => dispatch => {
  dispatch ({ type: FETCH_SCHOOLDATA_START });
  axios
    .post(`https://bublapp.herokuapp.com/api/schools/${id}/join`)
    .then(res => {
      dispatch({ type: FETCH_SCHOOLDATA_SUCCESS, payload: id })
    })
    .catch(err => {
      dispatch({ type: FETCH_SCHOOLDATA_FAIL, payload: err})
    })
}

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';

export const addPost = newPost => dispatch => {
  dispatch ({ type: ADD_POST_START });
  return axiosWithAuth()
    .post(`https://bublapp.herokuapp.com/api/posts`, newPost)
    .then(res => {
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_POST_FAIL, payload: err});
    })
}

export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const getPosts = () => dispatch => {
  dispatch ({ type: FETCH_POST_START });
  axiosWithAuth()
    .get('https://bublapp.herokuapp.com/api/posts')
    .then(res => {
      dispatch({ type: FETCH_POST_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_POST_FAIL, payload: err})
    })
}

export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

export const deletePost = id => dispatch => {
  dispatch ({ type: DELETE_POST_START }); 
  return axiosWithAuth()
    .delete(`https://bublapp.herokuapp.com/api/posts/${id}`)
    .then(res => { 
      dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_POST_FAIL, payload: err});
    })
}