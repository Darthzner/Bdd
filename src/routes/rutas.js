const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/rutas.controller');
router.get('/users', getUsers);

module.exports = router;