const Sequelize = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize('mydoc', 'root', 'skander1998', {
=======
const sequelize = new Sequelize('mydoc', 'root', '123456', {

>>>>>>> 20975e6ba395655c721a324533289a1d71ac3312
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
