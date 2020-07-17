// /models/Product.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    summonerName: String,
    summonerId: String,
})

mongoose.model('products', productSchema);