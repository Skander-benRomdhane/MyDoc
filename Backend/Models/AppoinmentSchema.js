const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index.js')
class Appoinments extends Model {}
Appoinments.init({
  patientId: Sequelize.INTEGER,
  doctorId: Sequelize.INTEGER,
  check : Sequelize.STRING,
  price: Sequelize.INTEGER,
}, { sequelize , modelName: 'appoinments' });

module.exports = Appoinments ;