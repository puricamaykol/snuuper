let db = require('./index.js');

 /**
  * Definición del modelo de Sequelize para el usuario
  * @type {[type]}
  */
  const User = db.sequelize.define('MOCK_DATA', {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  Username: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
}, {
    timestamps: false
});

  module.exports = User;
