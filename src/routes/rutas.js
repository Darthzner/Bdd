const { Router } = require('express');
const router = Router();

const { getUsers, addProduct, inPersonal, inCliente, inVenta } = require('../controllers/rutas.controller');
router.get('/users', getUsers);
router.post('/products', addProduct);
router.post('/addEmployer', inPersonal);
router.post('/addClient', inCliente);
router.post('/inVenta', inVenta);


module.exports = router;
