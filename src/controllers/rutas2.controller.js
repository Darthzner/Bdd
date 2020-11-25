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

