const { Router } = require('express');
const router = Router();

const { getUsers, addProduct, inPersonal, inCliente, inVenta, getStock1, getStock2, getStock3 } = require('../controllers/rutas.controller');
router.get('/users', getUsers);
router.post('/addProducto', addProduct);
router.post('/addEmployer', inPersonal);
router.post('/addClient', inCliente);
router.post('/inVenta', inVenta);
router.get('/getStock1', getStock1);
router.get('/getStock2', getStock2);
router.get('/getStock3', getStock3);

const { getPersonalPro, getProductosVendidos, getVentasT} = require('../controllers/rutas.controller');
router.get('/getPersonalPro', getPersonalPro);
router.get('/getProductosVendidos', getProductosVendidos);
router.get('/getVentasT', getVentasT);


module.exports = router;
