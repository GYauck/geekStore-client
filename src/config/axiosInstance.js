import axios from 'axios';

/* const baseURL = 'http://localhost:8080'; */
const baseURL = 'https://geekstore-server.onrender.com';

const config = {
  baseURL,
  withCredentials: true,
};

export const instance = axios.create(config);

export const fetchApi = ({ method, url, body, headers }) =>
  instance.request({
    url,
    method,
    headers,
    data: body,
  });