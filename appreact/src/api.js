import axios from 'axios';
// import { logout } from './shared/utils/auth';
import { inHTMLData } from 'xss-filters';

const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  async (config) => {
    // Attempt to get the token from local storage
    const token = localStorage.getItem('token');

    // If the token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// public routes

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    console.log('exception', exception);
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes

// const checkResponseCode = (exception) => {
//   const responseCode = exception?.response?.status;

//   if (responseCode) {
//     (responseCode === 401 || responseCode === 403) && logout();
//   }
// };

export const sanitizedUrl = {
  Vehicle: inHTMLData('/addVehicle'),
  Task: inHTMLData('/AddNewTask'),
  Announcement: inHTMLData('/AddNewAnnouncement'),
  MapWithEVStations: inHTMLData('/MapWithEVStations'),
  AdminTaskTable: inHTMLData('/AdminTaskTable'),
  MyTasks: inHTMLData('/MyTasks'),
  MyReservations: inHTMLData('/MyReservations'),
  MyWallet: inHTMLData('/MyWallet'),
  editUser: inHTMLData('/editUser'),
  Dashboard: inHTMLData('/dashboard'),
};
