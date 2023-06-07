const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  workspaceId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  activeTasksId: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tasksCompleted: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  hoursCompleted: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

const bootstrap = async () => {
  try {
    await Users.sync({ force: true });
    console.log('Tasks synced and connected');
  } catch(err) {
    console.log('could not connect to Tasks table');
    console.error(err);
  }
}
bootstrap();

module.exports = Users;