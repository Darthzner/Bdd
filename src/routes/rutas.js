const { Router } = require('express');
const router = Router();

const { addProduct, inPersonal, inCliente, inVenta, getStock1, getStock2, getStock3, getAllClients, getAllPersonal } = require('../controllers/rutas.controller');
router.get('/getAllClientes', getAllClients);
router.get('/getAllPersonal', getAllPersonal);
router.post('/addProducto', addProduct);
router.post('/addEmployer', inPersonal);
router.post('/addClient', inCliente);
router.post('/inVenta', inVenta);
router.get('/getStock1', getStock1);
router.get('/getStock2', getStock2);
router.get('/getStock3', getStock3);

const { getPersonalPro, getProductosVendidos, getVentasT } = require('../controllers/rutas.controller');
router.get('/getPersonalPro', getPersonalPro);
router.get('/getProductosVendidos', getProductosVendidos);
router.get('/getVentasT', getVentasT);


const { getCliente, getPersonal, getProducto, getVenta, getAllProd, addStock } = require('../controllers/rutas.controller');
router.get('/getCliente', getCliente);
router.get('/getPersonal', getPersonal);
router.get('/getProducto', getProducto);
router.get('/getVenta', getVenta);
router.get('/getAllProd', getAllProd);
router.get('/addStock', addStock);

const { getAllVentas, getIngresosT } = require('../controllers/rutas.controller');
router.get('/getAllVentas',getAllVentas);
router.get('/getIngresosT',getIngresosT);

module.exports = router;
