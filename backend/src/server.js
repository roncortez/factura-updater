require('dotenv').config();
const express = require ('express');
const app = express();
const {sql, dbConfig }= require('../config/dbConfig');
const port = process.env.APP_PORT || 4000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Ruta para obtener datos desde la base de datos
app.get('/api/data', async (req, res) => {
    let pool;
    const numero = req.params.numero;
    try {
        // Conectarse a la base de datos
        pool = await sql.connect(dbConfig);

        // Ejecutar consulta SQL
        //const query = `SELECT * FROM Proyecto`;
        const result = await pool.request()
            .input('Numero', sql.VarChar, numero)
            .query('SELECT Numero, Usuario, Fecha FROM Compra WHERE Numero = @numero');
        
        res.json(result.recordset);
        // Enviar resultados como respuesta JSON
        //res.json(result.recordset);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    } finally {
        // Cerrar el pool de conexiones al finalizar
        if (pool) {
            pool.close();
        }
    }
});

  
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
  