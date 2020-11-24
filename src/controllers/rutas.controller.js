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

const addProduct = async (req, res) => {
    const { nombre, stock, precio, categoria, descripcion} = req.body;
    const response = await pool.query('Insert into Productos (nombre, stock, precio, categoria, descripcion) values ($1, $2, $3, $4, $5)', [nombre, stock, precio, categoria, descripcion]);
    console.log(response);
    res.send('producto ingresado');
}

module.exports = {

    getUsers,
    addProduct
}


