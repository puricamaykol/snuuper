/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12qwaszx"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
con.query("USE PRUEBA", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);

    con.query("SELECT * FROM MOCK_DATA LIMIT 10", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result[0].id);
  	});


  });

});*/

const Sequelize = require("sequelize");
const sequelize = new Sequelize('PRUEBA', 'root', '12qwaszx', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = sequelize.define('MOCK_DATA', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  Username: {
    type: Sequelize.STRING
  },
}, {
    timestamps: false
});


  User.findAll({ raw: true }).then(users => {
   console.log(users[0]);
})