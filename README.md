Welcome to StackEdit!
===================

Prueba realizada para snuuper
----------

Instalation
===================

 `$ npm install`
 

Set Database and Token secret
===================
Go to `/api/config.js` and set:


```javascript
secret: "[YOR TOKEN SECRET]",
  DB: {
  	name: '[DB NAME]',
  	user: '[YOUR FAVORITE USER]',
  	password: '[USER PW]',
  	host: '[HOST]',
    dialect: '[TYPE OF DB]'
  }
```

Run It
===================

 `$ npm start`


> Modifiqué la declaración de la tabla para incluir la clave primaria

```bash
create table MOCK_DATA (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50),
	Username VARCHAR(50),
    PRIMARY KEY (id)
);
```

> Realicé la autorización de usuario con JWT. Dada que la API REST es
> stateless, todo cliente debe enviar un token válido en la cabecera de
> autenticación.

API
===

 - `GET /api/users`

 

 - `GET /api/users/:userId'`

 

 - ` POST /api/users`

  

 - `PUT /api/users/:userId`

  

 - `PATCH /api/users/:userId`

  

 - `DELETE /api/users/:userId`
  
  

 - `POST /api/login`

Ruta que require autorización:

 - `GET /private/users`

Debe recibir un token en la cabecera de autorización en este formato:

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlhdCI6MTUwODUyMTQwOSwiZXhwIjoxNTA5MTI2MjA5fQ.QO2fdHHOQWFAYKJWNm9qCsTecohG6Mz6B9uxW40obEU
```
