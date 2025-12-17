import { Router } from 'express';
import { getVendorA } from '../vendor/vendorA.js';
import { getVendorC } from '../vendor/vendorC.js';
const vendorRoute = Router();

vendorRoute.get('/vendor-a', getVendorA);
vendorRoute.get('/vendor-c', getVendorC);

export default vendorRoute;