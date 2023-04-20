import axiosClient from './axiosClient';
const authApi = {
  login: (email, password) => {
    const url = 'http://localhost:3000/signup';
    const data = { email, password };
    return axiosClient.post(url, data);
  },
};

export default authApi;
