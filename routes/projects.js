var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var projects = [
	{
		url: "https://allegro-music-store.herokuapp.com",
		description: "A simple single-page Point of Sales web-application using MEAN"
	}, {
		url: "https://flash-gallery.herokuapp.com",
		description: "An image gallery web-application using MEAN"
	}];

	var vm = {
		title: 'Portfolio',
		subtitle: 'Projects',
		list: projects
	};
	res.render('projects', vm);
});

module.exports = router;
