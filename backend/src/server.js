require('dotenv').config();
const express = require ('express');
const app = express();
const port = process.env.APP_PORT || 4000
const cors = require('cors');
const dataRoutes = require( './routes/dataRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Ruta para obtener datos desde la base de datos
app.use('/api/data', dataRoutes);
  

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
  