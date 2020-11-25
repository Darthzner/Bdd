const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'tienda',
    port: '5432'
});

const getUsers = async (req, res) => {

    const response = await pool.query('Select * from empleados');
    console.log(response.rows);
    res.json(response.rows);

}

const addProduct = (req, res) => {
    const { nombre, stock, precio, categoria, descripcion} = req.body   
    let sql = 'Insert into Productos (nombre, stock, precio, categoria, descripcion) values ($1, $2, $3, $4, $5) RETURNING *'
    let values = [nombre, stock, precio, categoria, descripcion]
    pool.query(sql, values)
    .then(res => console.log(res.rows))
    .catch(e => console.error(e.stack))
    res.send('producto ingresado');
}

const inPersonal = (req, res) => {
    
    const { nombre, rut, puesto, salario } = req.body;
    let fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getMonth()+ 1;
    let year = fecha.getFullYear();
    let fechita = `${month}/${day}/${year}`;//Año gringoxd
    let sql = 'Insert into Personal (nombre, rut, puesto, fecha, salario) values ($1, $2, $3, $4, $5) RETURNING *'
    let values = [nombre, rut, puesto,fechita, salario]
    pool.query(sql, values)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))
    res.send('Personal ingresado');
}

const inCliente =  (req, res) => {
    const { nombre, rut, direccion, correo } = req.body;
    let sql = 'Insert into Cliente (nombre, rut, direccion,correo, inscrito) values ($1, $2, $3, $4, $5) RETURNING *'
    let values = [nombre, rut, direccion, correo, true]
    pool.query(sql, values)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))
    
    res.send('Cliente ingresado');
}

const inVenta = async (req, res) => {
    const pasa =true
    const bdd = await pool.query("select * from productos where ID_producto=1")
    console.log(bdd.rows[0].stock)
    var idd 
    for (let i in req.body.detalle){
        
        console.log(req.body.detalle[i])
    }
    if (pasa){
    //let stockA = pool.query(`select stock from productos where productos.ID_producto = ${req.body.ID_producto}`)
        const { Rut_cliente, Rut_trabajador, precio } = req.body;   
        let fecha = new Date();
        let day = fecha.getDate();
        let month = fecha.getMonth()+ 1;
        let year = fecha.getFullYear();
        let fechita = `${month}/${day}/${year}`;//Año gringoxd
        let sql = 'Insert into Venta (Rut_cliente, Rut_trabajador,Fecha,  precio) values ($1, $2, $3, $4) RETURNING *'
        let values = [Rut_cliente, Rut_trabajador,fechita, precio]
        pool.query(sql, values)
        .then(res => console.log(res.rows[0].id_venta))
        .catch(e => console.error(e.stack))          
        res.send('Venta ingresada');
    }
    else{
        res.send('no se encuentra ')
    }
}

const getStock1 = async (req, res) => {

    const response = await pool.query('SELECT Productos.Nombre, Productos.Stock FROM Productos ORDER BY Productos.Stock ASC;');
    console.log(response.rows);
    res.json(response.rows);

}

const getStock2 = async (req, res) => {

    let nombre = req.query.nombre;
    let sql = `SELECT Stock FROM Productos WHERE Nombre = '${nombre}';`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);

}

const getStock3 = async (req, res) => {
    
    let id = req.query.id;
    let sql = `SELECT Productos.Stock FROM Productos WHERE Productos.ID_producto = ${id};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);

}

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

module.exports = {

    getUsers,
    addProduct,
    inPersonal,
    inCliente,
    inVenta,
    getStock1,
    getStock2,
    getStock3,
    getPersonalPro,
    getProductosVendidos,
    getVentasT
}


