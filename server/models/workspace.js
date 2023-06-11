const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Workspaces = sequelize.define('Workspaces', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  groupIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true
  },
  activeTasksId: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true
  },
  completedTasksId: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true
  },
});

// sync database function
async function syncDatabase() {
  try {
    await Workspaces.sync({ force: true });
    console.log('Workspaces synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}


module.exports = Workspaces;