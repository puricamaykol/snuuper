let db = require('./index.js');
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = db.sequelize.define('MOCK_DATA', {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true
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
    allowNull: false
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
