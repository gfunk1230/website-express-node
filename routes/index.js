exports.index = function(req, res) {
	res.render('default', {
		title: 'Home',
		classname: 'home',
	});
}

exports.about = function(req, res) {
	res.render('default', {
		title: 'About Us',
		classname: 'about',
		users: ['Greg', 'Yen', 'Pedro', 'Beto', 'Paz']
	});
}