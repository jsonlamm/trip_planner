const router = require('express').Router();
const models = require('../models');
const Hotel = require('../models/hotel')
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Place = require('../models/place')

module.exports = router;

router.get('/', (req, res, next) => {
  res.render('layout')
  // var outerScopeContainer = {};
  // Hotel.findAll()
  // .then(function (dbHotels) {
  //   outerScopeContainer.dbHotels = dbHotels;
  //   return Restaurant.findAll();
  // })
  // .then(function (dbRestaurants) {
  //   outerScopeContainer.dbRestaurants = dbRestaurants;
  //   return Activity.findAll();
  // })
  // .then(function (dbActivities) {
  //   res.render('index')
    // , {
    //   templateHotels: outerScopeContainer.dbHotels,
    //   templateRestaurants: outerScopeContainer.dbRestaurants,
    //   templateActivities: dbActivities
    // });
  // })
  // .catch(next);
})
