// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');

const User = sequelize.define('User', {
    googleId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
});

module.exports = User;
