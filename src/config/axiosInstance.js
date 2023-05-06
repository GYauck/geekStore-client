import axios from 'axios';

const baseURL = 'http://localhost:8080/';

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