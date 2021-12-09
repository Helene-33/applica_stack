const mongoose = require('mongoose');

const strSchema = mongoose.Schema({
		type: String
},
{
	collection: 'helloWorld'
});

const helloWorld = mongoose.model('helloWorld', strSchema)

module.exports = {
	helloWorld
}
