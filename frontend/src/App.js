
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  
  const [numero, setNumero] = useState('');
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState('');

  const handleNumeroChange = (e) => setNumero(e.target.value);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.get(`http://localhost:3001/api/data/${numero}`);
          setResultados(response.data);
          setError('');
      } catch (error) {
          console.error('Error al obtener datos:', error);
          setError('Error al obtener datos');
      }
  };

  return (
    <div className="App">
      <h1>Consulta de Datos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={numero}
                    onChange={handleNumeroChange}
                    placeholder="Ingrese un número"
                />
                <button type="submit">Consultar</button>
            </form>

            {error && <p>{error}</p>}

            <div>
                <h2>Resultados</h2>
                <ul>
                    {resultados.map((resultado, index) => (
                        <li key={index}>
                            Número: {resultado.Numero}, Usuario: {resultado.Usuario}, Fecha: {resultado.Fecha}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  );
}

export default App;
