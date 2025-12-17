import { Router } from 'express';
import { getVendorA } from '../vendor/vendorA.js';
const vendorRoute = Router();

vendorRoute.get('/vendor-a', getVendorA);
vendorRoute.get('/vendor-c', getVendorC);

export default vendorRoute;