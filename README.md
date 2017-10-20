Welcome!
===================

Prueba realizada para snuuper

----------




Modifique la declaracion de la tabla para agregar la clave primaria y hacerla autoincremental

create table MOCK_DATA (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50),
	Username VARCHAR(50),
    PRIMARY KEY (id)
);