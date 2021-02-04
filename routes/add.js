var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	response.render('index', data);
	var newFriend=({
		'name': request.query.name,
		'description': request.query.description,
		'imageURL': "http://lorempixel.com/400/400/people"
	});
	data.friends.push(newFriend);
}