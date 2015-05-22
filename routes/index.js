var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var projects = [
	{
		url: "http://tinyurl.com/allegro-mkc",
		description: "A simple single-page Point of Sales web-application using MEAN",
		date_created: new Date(2015, 5, 10)
	}];

	var vm = {
		title: 'Ming Kai Chen\'s Website',
		intro: 'My name is Ming Kai Chen, and these are my Projects',
		subtitle1: 'Websites',
		list: projects
	};
	res.render('index', vm);
});

module.exports = router;
