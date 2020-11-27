const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'tienda',
    port: '5432'
});

const getAllPersonal = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const response = await pool.query('Select * from Personal;');
    console.log(response.rows);
    res.json(response.rows);

}
const getAllClients = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const response = await pool.query('Select * from Cliente;');
    console.log(response.rows);
    res.json(response.rows);

}

const addProduct = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { nombre, stock, precio, categoria, descripcion} = req.body   
    let sql = 'Insert into Productos (nombre, stock, precio, categoria, descripcion) values ($1, $2, $3, $4, $5) RETURNING *'
    let values = [nombre, stock, precio, categoria, descripcion]
    pool.query(sql, values)
    .then(res => console.log(res.rows))
    .catch(e => console.error(e.stack))
    res.send('producto ingresado');
}

const inPersonal = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { nombre, rut, puesto, salario } = req.body;
    let fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getMonth()+ 1;
    let year = fecha.getFullYear();
    let fechita = `'${day}/${month}/${year}'`;//Año gringoxd
    let sql = 'Insert into Personal (nombre, rut, puesto, fecha_empleo, salario) values ($1, $2, $3, $4, $5) RETURNING *'
    let values = [nombre, rut, puesto,fechita, salario]
    pool.query(sql, values)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))
    res.send('Personal ingresado');
}

const inCliente =  (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { nombre, rut, direccion, correo } = req.body;
    let sql = 'Insert into Cliente (nombre, rut, direccion,correo, inscrito) values ($1, $2, $3, $4, $5) RETURNING *'
    let values = [nombre, rut, direccion, correo, true]
    pool.query(sql, values)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))
    
    res.send('Cliente ingresado');
}

const inVenta = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    var pasa =true  
    for (let i in req.body.detalle){
        
        let stockBdd = await pool.query(`select stock from productos where ID_producto=${i};`)
        //console.log(stockBdd.rows[0].stock)
        //pool.query(`select stock from productos where ID_producto=${i}`).then(res => console.log(res.rows[0].stock))
        //.catch(e => console.error(e.stack))
        //console.log(`${req.body.detalle[i]} y ${stockBdd}`)
        if(req.body.detalle[i]>stockBdd.rows[0].stock){            
            pasa = false
            console.log(`El producto con id: ${i} no posee Stock `)
            
            
        }
        else{
            pool.query(`update productos set stock= ${stockBdd.rows[0].stock - req.body.detalle[i]} where ID_producto= ${i};`)
        }        
        
    }
    if (pasa){
    //let stockA = pool.query(`select stock from productos where productos.ID_producto = ${req.body.ID_producto}`)
        const { Rut_cliente, Rut_trabajador, detalle } = req.body;   
        let fecha = new Date();
        let day = fecha.getDate();
        let month = fecha.getMonth() + 1;
        let year = fecha.getFullYear();
        var ptotal = 0
        for (let i in detalle){
            let precioUnitario = await pool.query(`select precio from productos where ID_producto=${i};`)
            ptotal += detalle[i]*precioUnitario.rows[0].precio
        }
        let fechita = `${day}/${month}/${year}`;//Año europeo pls xd
        let sql = 'Insert into Venta (Rut_cliente, Rut_trabajador,Fecha,  precio) values ($1, $2, $3, $4) RETURNING *'
        let values = [Rut_cliente, Rut_trabajador,fechita, ptotal]
        const b = await pool.query(sql, values)
        //.then(res => console.log(res.rows[0].id_venta))
        //.catch(e => console.error(e.stack)) 
        for (let i in detalle){  
            console.log("esta weas es"+b.rows[0].id_venta)          
            let values = [b.rows[0].id_venta, i, detalle[i]]
            let sql1 = 'Insert into Detalle_de_venta (ID_venta, ID_producto, Cantidad) values ($1, $2, $3) RETURNING *' 
            pool.query(sql1,values).catch(e => console.error(e.stack))          

        }       
        res.send('Venta ingresada');
    }
    else{
        res.send(`No se pudo realizar la venta `)
    }
    
}

const getStock1 = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const response = await pool.query('SELECT Productos.Nombre, Productos.Stock FROM Productos ORDER BY Productos.Stock ASC;');
    console.log(response.rows);
    res.json(response.rows);

}

const getStock2 = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    let nombre = req.query.nombre;
    let sql = `SELECT Stock FROM Productos WHERE Nombre = '${nombre}';`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);

}

const getStock3 = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    let id = req.query.id;
    let sql = `SELECT Productos.Stock FROM Productos WHERE Productos.ID_producto = ${id};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);

}

const getPersonalPro = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
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
    res.header("Access-Control-Allow-Origin", "*");
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
    res.header("Access-Control-Allow-Origin", "*");
    let fecha1 = req.query.fecha1;
    let fecha2 = req.query.fecha2;
    let sql = `SELECT Productos.ID_producto, Productos.Nombre,
    SUM(Detalle_de_venta.Cantidad) as Cant
    FROM Productos, Venta, Detalle_de_venta WHERE
    Venta.ID_venta = Detalle_de_venta.ID_venta
    AND Detalle_de_venta.ID_producto = Productos.ID_producto
    AND Venta.Fecha BETWEEN '${fecha1}' and '${fecha2}'
    GROUP BY Productos.ID_producto, Productos.Nombre
    ORDER BY Cant DESC;`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getCliente = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let rut = req.query.rut;
    let sql = `select * from Cliente where Cliente.rut = ${rut};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getPersonal = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let rut = req.query.rut;
    let sql = `select * from Personal where Personal.rut = ${rut};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getProducto = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = req.query.id;
    let sql = `select * from Productos where Productos.ID_producto = ${id};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getVenta = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = req.query.id;
    let sql = `select * from Venta where Venta.ID_Venta = ${id};`;
    let sql2 = `select * from Detalle_de_venta where Detalle_de_venta.ID_venta = ${id};`;
    const response = await pool.query(sql);
    const response2 = await pool.query(sql2);
    const venta = response.rows[0];
    const detalle = response2.rows;
    const c = {venta,detalle};
    console.log(c);
    res.json(c);
}

const getAllProd = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    let sql = `select * from Productos;`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);

}

const addStock = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    let id = req.query.id;
    let stock = req.query.stock;
    let sqlStockPrev = `select Productos.Stock from Productos where Productos.ID_producto = ${id};`;
    const stockPrev = await pool.query(sqlStockPrev);
    let newStock = Number(stock) + Number(stockPrev.rows[0].stock);
    let sql = `update Productos set stock = ${newStock} where ID_producto= ${id};`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

const getAllVentas = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    let sql = `select * from Venta;`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);

}

const getIngresosT = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let fecha1 = req.query.fecha1;
    let fecha2 = req.query.fecha2;
    let sql = `SELECT sum(Venta.Precio)
    FROM Venta WHERE
    Venta.Fecha BETWEEN '${fecha1}' and '${fecha2}';`;
    const response = await pool.query(sql);
    console.log(response.rows);
    res.json(response.rows);
}

module.exports = {

    getAllPersonal,
    getAllClients,
    addProduct,
    inPersonal,
    inCliente,
    inVenta,
    getStock1,
    getStock2,
    getStock3,
    getPersonalPro,
    getProductosVendidos,
    getVentasT,
    getCliente,
    getPersonal,
    getProducto,
    getVenta,
    getAllProd,
    addStock,
    getAllVentas,
    getIngresosT
}


