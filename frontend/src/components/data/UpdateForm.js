import React from "react";
import  '../../styles/UpdateForm.css'

const UpdateForm = ({ seleccion }) => {
    return (
        <div className="update-form">
            <h2>Datos de la factura:</h2>
            <p>Numero: {seleccion.Numero}</p>
            <p>Usuario: {seleccion.Usuario}</p>
        </div>
    )


}

export default UpdateForm;