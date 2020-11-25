CREATE DATABASE tienda;

create table Productos(
    ID_producto serial primary key,
    Nombre text,
    Stock int,
    Precio int,
    Categoria text,
    Descripcion text
);

create table Personal(
    Nombre text,
    Rut int primary key,
    Puesto text,
    Fecha_empleo date,
    Salario int
);

create table Cliente(
    Nombre text,
    Rut int primary key,
    Direccion text,
    Correo text,
    Inscrito boolean
);

create table Venta(
    ID_venta serial primary key,
    Rut_cliente int,
    Rut_trabajador int,
    Fecha date,
    Precio int,
    constraint FK_cli
        foreign key (Rut_cliente)
        references Cliente(Rut),
    constraint FK_per
        foreign key (Rut_trabajador)
        references Personal(Rut)
);

create table Detalle_de_venta(
    ID_venta int,
    ID_producto int,
    Cantidad int,
    constraint FK_ven
        foreign key (ID_venta)
        references Venta(ID_venta),
    constraint FK_prod
        foreign key (ID_producto)
        references Productos(ID_producto)
);

create table Compra(
    ID_compra serial primary key,
    Precio_total int,
    Fecha_compra date
);

create table Detalle_de_compra(
    ID_compra int,
    ID_producto int,
    Cantidad int,
    Precio_unitario int,
    constraint FK_comp
        foreign key (ID_compra)
        references Compra(ID_compra),
    constraint FK_prod
        foreign key (ID_producto)
        references Productos(ID_producto)
);
/*{
		"Rut_cliente" : 20789678,
    "Rut_trabajador" : 12181281,
    "precio" : 500000
   
    
}/*