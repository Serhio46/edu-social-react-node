import { ISignUp } from 'models/ISignUp';
import axios from 'axios';
import { ILogin } from 'models/ILogin';

export const createUser = async (user: ISignUp) => {
   try {
      const response = await axios.post('http://localhost:5000/api/user', user);
      return response.data;
   } catch (error) {}
};

export const signInUser = async (user: ILogin) => {
   try {
      const response = await axios.post('http://localhost:5000/api/auth/login', user);
      return response.data;
   } catch (error) {}
};

export const makeUserSession = async () => {
   const response = await axios.get('http://localhost:5000/api/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
   });
   return response.data;
};

export const logOutUser = async () => {
   const response = await axios.post('http://localhost:5000/api/auth/logout');
};
