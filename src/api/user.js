import axios from 'axios';
import { baseUrl } from '../environment/config';

export const getAllUsers = async () => {
  const options = {
    mehtod: 'GET',
    url: `${baseUrl}/api/users`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const getUserById = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/users/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };
  const { data } = await axios.request(options);

  return data;
};

export const createUser = async () => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/api/users`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const updateUser = async (id) => {
  const options = {
    method: 'PUT',
    url: `${baseUrl}/api/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const deleteUser = async (id) => {
  const options = {
    method: 'DELETE',
    url: `${baseUrl}/api/users/${id}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};
