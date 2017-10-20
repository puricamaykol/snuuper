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
module.exports = db;


