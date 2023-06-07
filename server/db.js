const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('progility', 'caiankeyes', 'rootUser', {
  host: 'localhost',
  dialect: 'postgres'
});

const bootstrap = async () => {
  try {
    await sequelize.authenticate();
    console.log('database connected');
  } catch(err) {
    console.error(err);
  }
}
bootstrap();

module.exports = sequelize;