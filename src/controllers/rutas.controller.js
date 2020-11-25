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
    .then(res => console.log(res))
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
    let value = id;
    const response = await pool.query(sql, value);
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
    getStock3
}


