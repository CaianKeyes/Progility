const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tasks = sequelize.define('Tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  timespan: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  requirements: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

const bootstrap = async () => {
  try {
    await Tasks.sync({ force: true });
    console.log('Tasks synced and connected');
  } catch(err) {
    console.log('could not connect to Tasks table');
    console.error(err);
  }
}
bootstrap();

module.exports = Tasks;