const { getStock1, getStock2, getStock3 } = require('../controllers/rutas.controller');
router.get('/getStock1', getStock1);
router.get('/getStock2', getStock2);
router.get('/getStock3', getStock3);

//2

const { getPersonalPro, getProductosVendidos, getVentasT} = require('../controllers/rutas.controller');
router.get('/getPersonalPro', getPersonalPro);
router.get('/getProductosVendidos', getProductosVendidos);
router.get('/getVentasT', getVentasT);

//3
const { getCliente, getPersonal, getProducto, getVenta } = require('../controllers/rutas.controller');
router.get('/getCliente', getCliente);
router.get('/getPersonal', getPersonal);
router.get('/getProducto', getProducto);
router.get('/getVenta', getVenta);

