CREATE DATABASE tienda;

CREATE table empleados(
    id Serial primary key,
    name varchar(100),
    email TEXT
);

Insert Into empleados (name, email) Values
    ('pablo', 'pablo@udp.cl'),
    ('pp', 'pp@mail.udp.cl');

CREATE table Productos(
    id Serial primary key,
    nombre TEXT,
    stock integer,
    precio int,
    categoria TEXT,
    descripcion TEXT

);