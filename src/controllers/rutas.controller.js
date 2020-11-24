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
    res.send('empleados');

}

module.exports = {

    getUsers
}


