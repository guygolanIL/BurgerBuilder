import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://react-my-burger-9d03a.firebaseio.com/'
})

export default AxiosInstance;