import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          if (!localStorage.getItem('user')) {
            axiosWithAuth()
            .get('https://bublapp.herokuapp.com/api/auth/decode')
            .then(res => {localStorage.setItem('user', JSON.stringify(res.data))})
          }
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;