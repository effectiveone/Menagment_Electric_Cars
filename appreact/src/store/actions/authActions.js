import * as api from '../../api';
import { openAlertMessage } from './alertActions';
import axios from 'axios';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
  UPDATE_USER: 'UPDATE_USER',
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    logout: () => dispatch(logout()),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('user');

    dispatch(setUserDetails(null));

    try {
      await axios.delete('http://node:5002/api/auth/logout');
    } catch (error) {
      console.error(error);
    }
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      localStorage.setItem('token', userDetails.token);
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

export const updateUser = (user) => {
  return {
    type: authActions.UPDATE_USER,
    user,
  };
};
