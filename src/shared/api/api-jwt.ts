import axios from 'axios';

import { env } from '../consts/env';
import { getAuthToken } from '../lib/persistance';

const apiJwt = axios.create({
  baseURL: env.baseUrl,
});

apiJwt.interceptors.request.use((config) => {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiJwt;
