import express from 'express';
import vendorRoute from './routes/vendorRoute.js';
import integratorRoute from './routes/integratorRoute.js';

const app = express();
const port = 3000;

app.use('/', integratorRoute);
app.use('/api', vendorRoute);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})