import { Router } from 'express';
import { getVendorA } from '../vendor/vendorA.js';
import { getVendorB } from '../vendor/vendorB.js';
import { getVendorC } from '../vendor/vendorC.js';
const vendorRoute = Router();

vendorRoute.get('/vendor-a', getVendorA);
vendorRoute.get('/vendor-b', getVendorB);
vendorRoute.get('/vendor-c', getVendorC);

export default vendorRoute;