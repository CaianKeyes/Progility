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
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true
  }
});

// sync database function
async function syncDatabase() {
  try {
    await Tasks.sync({ force: true });
    console.log('Tasks synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

module.exports = Tasks;