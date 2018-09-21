const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

const Genre = module.exports = mongoose.model("Genre",genreSchema);
// Get Genres
module.exports.getGenres = function(callback,limit) {
    Genre.find(callback).limit(limit);
    // Genre.find({},null,{limit:limit},callback);
}

// Add Genre
module.exports.addGenre = function(genre,callback) {
    Genre.create(genre, callback);
}

// update Genre
module.exports.updateGenre = function(id, genre, options, callback) {
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// delete a genre
module.exports.removeGenre = function(id, callback) {
    var query = {_id: id};
    Genre.deleteOne(query, callback);
}
// remove is deprecated
// module.exports.removeGenre = function(id, callback) {
//     var query = {_id: id};
//     Genre.remove(query, callback);
// }
