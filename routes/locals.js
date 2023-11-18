var express = require('express');
var router = express.Router();

/* 도서 검색 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName: 'locals/search.ejs' });
});

router.get('/favorite', function(req, res, next) {
  res.render('index', { title: '즐겨찾기', pageName: 'locals/favorite.ejs'})
});

module.exports = router;