import './App.css';
import React, { useState } from 'react';
import DataForm from './components/data/DataForm';
import DataTable from './components/data/DataTable';
import useFetchData from './hooks/useFetchData';
import UpdateForm from './components/data/UpdateForm';



function App() {
  const { resultados, error, fetchData } = useFetchData();
  const [seleccion, setSeleccion] = useState(null);

    const handleDataFetch = (numero) => {
        fetchData(numero);
    };

    const handleSeleccion = (seleccion) => {
      setSeleccion(seleccion);
    };

    return (
      <div className="App">
          <main className='main-container'>
              <DataForm onSubmit={handleDataFetch} />
              {error && <p>{error}</p>}
              <div className="data-container">
                <DataTable resultados={resultados} onSelect={handleSeleccion} />
                {seleccion && <UpdateForm seleccion={seleccion} />}
              </div>
          </main>
      </div>
  );
}

export default App;
