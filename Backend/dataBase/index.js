const Sequelize = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize('mydoc', 'root', 'skander1998', {
=======

const sequelize = new Sequelize('mydoc', 'root', '123456', {
>>>>>>> 8e066f8707678d3652ea72ce166bd15ca2948387


    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    database: "mydoc"
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    sequelize.sync();
    module.exports = sequelize;
