let config = require('../config');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB.name, config.DB.user, config.DB.password, {
  host: config.DB.host,
  dialect: config.DB.dialect,

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


