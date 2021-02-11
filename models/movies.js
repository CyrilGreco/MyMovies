var mongoose = require('mongoose');
// Mettre en place le schéma de votre collection au sein de votre Backend.

var movieschema = mongoose.Schema({
	movieName: String,
	movieImg: String,

});

// schema pour créer un doc, collection est un ensemble de doc,
// création d'un model qui va gérer cityschema, avec le nom de la collection ('cities') et du schema.

var movieModel = mongoose.model('movies', movieschema);

module.exports = movieModel;