const { Router } = require('express');
const router = Router();

const { getUsers, addProduct } = require('../controllers/rutas.controller');
router.get('/users', getUsers);
router.post('/products', addProduct);

module.exports = router;
