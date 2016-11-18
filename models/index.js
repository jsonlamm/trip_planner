const Sequelize = require('sequelize');
const db = require('./db');
const Activity = require('./activity');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant')
const Place = require('./place');

Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
