import { useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [resultados, setResultados] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async (numero) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/data/${numero}`);
            setResultados(response.data);
            setError('');
        } catch (error) {
            console.error('Error al obtener datos:', error);
            setError('Error al obtener datos');
        }
    };

    return { resultados, error, fetchData };
};

export default useFetchData;
