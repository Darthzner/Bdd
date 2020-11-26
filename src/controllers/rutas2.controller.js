const getStock1 = async (req, res) => {

    const response = await pool.query('SELECT Productos.Nombre, Productos.Stock FROM Producto ORDER BY Productos.Stock ASC;');
    console.log(response.rows);
    res.json(response.rows);

}

const getStock2 = async (req, res) => {

    const { nombre } = req.query.nombre;
    let sql = 'SELECT Productos.Stock FROM Productos WHERE Productos.Nombre = "$1";';
    let value = nombre;
    const response = await pool.query(sql, value);
    console.log(response.rows);
    res.json(response.rows);

}

const getStock3 = async (req, res) => {

    const { id } = req.query.id;
    let sql = 'SELECT Productos.Stock FROM Productos WHERE Productos.ID_producto = $1;';
    let value = nombre;
    const response = await pool.query(sql, value);
    console.log(response.rows);
    res.json(response.rows);

}

//2

const getPersonalPro = async (req, res) => {
    let fecha1 = req.query.fecha1;
    let fecha2 = req.query.fecha2;
    let sql = `SELECT Personal.Rut, Personal.Nombre, 
    Personal.Puesto, Cantidades.c_ventas FROM Personal, 
    (SELECT Personal.Rut, COUNT(venta)
    as c_ventas FROM Personal, Venta
    WHERE venta.Rut_trabajador = Personal.Rut
    AND Venta.Fecha BETWEEN '${fecha1}' and '${fecha2}'
    GROUP BY Personal.Rut) as Cantidades
    WHERE Personal.Rut = Cantidades.Rut
    AND Cantidades.c_ventas = 
    (SELECT max(Cantidades.c_ventas)
    FROM (SELECT Personal.Rut, COUNT(venta)
    as c_ventas FROM Personal, venta
    WHERE venta.Rut_trabajador = Personal.Rut
    AND Venta.Fecha BETWEEN '${fecha1}' and '${fecha2}'
    GROUP BY Personal.Rut) as Cantidades);`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getProductosVendidos = async (req, res) => {
    let sql = `SELECT Productos.ID_producto, Productos.Nombre,
    SUM(Detalle_de_venta.Cantidad) as cant
    FROM Productos, Detalle_de_venta
    WHERE Productos.ID_producto = Detalle_de_venta.ID_producto
    GROUP BY Productos.ID_producto, Productos.Nombre
    ORDER BY cant ASC;`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getVentasT = async (req, res) => {
    let fecha1 = req.query.fecha1;
    let fecha2 = req.query.fecha2;
    let sql = `SELECT Producto.ID_producto, Producto.Nombre
    SUM(Detalle_de_venta.Cantidad) as Cantidad
    FROM Producto, Venta, Detalle_de_venta WHERE
    Venta.ID_venta = Detalle_de_venta.ID_venta
    AND Detalle_de_venta.ID_producto = Producto.ID_producto
    AND Venta.Fecha BETWEEN '${fecha1}' and '${fecha2}'
    GROUP BY Producto.ID_producto, Producto.Nombre
    ORDER BY Cantidad DESC;`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

//3

const getCliente = async (req, res) => {
    let rut = req.query.rut;
    let sql = `select * from Cliente where Cliente.rut = ${rut};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getPersonal = async (req, res) => {
    let rut = req.query.rut;
    let sql = `select * from Personal where Personal.rut = ${rut};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getProducto = async (req, res) => {
    let id = req.query.id;
    let sql = `select * from Productos where Productos.ID_producto = ${id};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getVenta = async (req, res) => {
    let id = req.query.id;
    let sql = `select * from Venta where Venta.ID_Venta = ${id};`;
    let sql2 = `select * from Detalle_de_venta where Detalle_de_venta.ID_venta = ${id}:`;
    const response = await pool.query(sql);
    const response2 = await pool.query(sql2);
    console.log(response.rows);
    console.log(response2.rows);
    res.json(response.rows, response2.rows);
}