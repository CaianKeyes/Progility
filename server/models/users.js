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

// sync database function
async function syncDatabase() {
  try {
    await Users.sync({ force: true });
    console.log('Users synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}



module.exports = Users;