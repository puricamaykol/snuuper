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
let db = {
	Sequelize: Sequelize,
	sequelize: sequelize
};
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = db;


