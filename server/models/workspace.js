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

const bootstrap = async () => {
  try {
    await Workspaces.sync({ force: true });
    console.log('Tasks synced and connected');
  } catch(err) {
    console.log('could not connect to Tasks table');
    console.error(err);
  }
}
bootstrap();

module.exports = Workspaces;