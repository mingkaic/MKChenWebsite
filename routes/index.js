var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var vm = {
		title: 'Ming Kai Chen'
	};
	res.render('index', vm);
});

module.exports = router;
