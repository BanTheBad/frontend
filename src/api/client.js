import axios from 'axios';
import { getToken } from './helpers';

let http;

(async () => {
  let Authorization;

  if (getToken()) {
    Authorization = { Authorization: `Bearer ${getToken()}` };
  }

  http = axios.create({
    // baseURL: "", attach base url here or configure via env
    headers: { ...Authorization },
  });
})();

export { http };
