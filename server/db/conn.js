// db/conn.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("razorpay", "root", "raju@8790", {
    host:"localhost",
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error:', err);
    });

module.exports = sequelize;
