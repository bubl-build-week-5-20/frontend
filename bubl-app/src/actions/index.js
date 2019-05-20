import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
// action types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ABSOLUTE_FAILURE = 'LOGIN_ABSOLUTE_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    
    return axios
        .post('https://bublapp.herokuapp.com/api/auth/login', creds)
        .then(res => {
            creds.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err));
}


export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const getUsers = (token) => dispatch => {
  dispatch ({ type: FETCH_USERS_START });
  axiosWithAuth()
    .get('https://bublapp.herokuapp.com/api/auth/login')
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data })
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