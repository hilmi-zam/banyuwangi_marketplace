import { Router } from 'express';
const integratorRoute = Router();
import { getIntegratorData } from '../controllers/integratorController.js';

integratorRoute.get('/', getIntegratorData);

export default integratorRoute;
