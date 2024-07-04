import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const fetchData = async (numero) => {
    const response = await axios.get(`${API_URL}/data/${numero}`);
    return response.data;
};
