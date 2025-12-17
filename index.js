import express from 'express';
import vendorRoute from './routes/vendorRoute.js';

const app = express();
const port = 3000;

app.use('/api', vendorRoute);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})