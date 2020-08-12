import { API_URL } from '../config';
import axios from 'axios';

// pas de gestions de token jWT via un intercepter car c'est du test front only

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
