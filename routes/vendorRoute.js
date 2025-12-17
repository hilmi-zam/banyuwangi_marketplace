import { Router } from 'express';
import { getVendorA } from '../vendor/vendorA.js';
const vendorRoute = Router();

vendorRoute.get('/vendor-a', getVendorA);

export default vendorRoute;