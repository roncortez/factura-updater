
const {sql, dbConfig} = require('../config/dbConfig');

// Función controladora para obtener datos desde la base de datos
const getData = async (req, res) => {
    let pool;
    const numero = req.params.numero;

    try {
        pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('Numero', sql.VarChar, numero)
            .query('SELECT Numero, Usuario, Fecha FROM Compra WHERE Numero = @Numero');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    } finally {
        if (pool) {
            pool.close();
        }
    }
};

module.exports = {
    getData,
};