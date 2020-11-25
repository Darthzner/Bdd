const { getStock1, getStock2, getStock3 } = require('../controllers/rutas.controller');
router.get('/getStock1', getStock1);
router.get('/getStock2', getStock2);
router.get('/getStock3', getStock3);

//2

const { getPersonalPro } = require('../controllers/rutas.controller');
const router = require('./rutas');
router.get('/getPersonalPro', getPersonalPro);

