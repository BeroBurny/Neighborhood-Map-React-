import axios from 'axios';

// axios api base (reduce code repetition)
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
});
