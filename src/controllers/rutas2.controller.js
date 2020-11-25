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
    ORDER BY cant ASC`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}