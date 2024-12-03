// En este archivo se declara el nombre de los campos y el tipo de dato que tendra
// cada uno de ellos
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

product = {
    id: Number,
    name: String,
    price: Number,
    category: String
}

var ProductSchema = Schema({
    id: Number,
    name: String,
    price: Number,
    category: String
});

module.exports = mongoose.model('Product', ProductSchema);