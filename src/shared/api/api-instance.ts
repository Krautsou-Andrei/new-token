import axios from 'axios';

import { env } from '../consts/env';

export const apiInstance = axios.create({
  baseURL: env.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiInstance;
