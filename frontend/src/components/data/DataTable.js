import React from 'react';
import '../../styles/DataTable.css';

const DataTable = ({ resultados , onSelect}) => (
    <table className="data-table">
        <thead>
            <tr>
                <th>Número</th>
                <th>Usuario</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {resultados.map((resultado, index) => (
                <tr key={index} onClick={() => onSelect(resultado)}>
                    <td>{resultado.Numero}</td>
                    <td>{resultado.Usuario}</td>
                    <td>{resultado.Fecha}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DataTable;
