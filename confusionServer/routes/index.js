var express = require('express');
var router = express.Router();

const indexRouter = require('./index');
const usersRouter = require('./users');
const dishRouter = require('./dishRouter');
const promoRouter = require('./promotionsRouter');
const leaderRouter = require('./leaderRouter');
const favoriteRouter = require('./favoriteRouter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', usersRouter);
router.use('/dishes', dishRouter);
router.use('/promotions', promoRouter);
router.use('/leaders', leaderRouter);
router.use('/favorites', favoriteRouter);

module.exports = router;
