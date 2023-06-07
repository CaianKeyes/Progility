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


module.exports = Workspaces;