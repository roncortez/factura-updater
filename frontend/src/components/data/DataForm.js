import React, {useState} from 'react';

const DataForm = ({ onSubmit }) => {
    const [numero, setNumero] = useState('');

    const handleNumeroChange = (e) => setNumero(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(numero);
    }

    return (
        <div>
            <h1>Ingrese el número de factura</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={numero}
                onChange={handleNumeroChange}
                placeholder='Número de factura'
            />
            <button type="submit">Buscar</button>
        </form>
        </div>
    );
};

export default DataForm;
