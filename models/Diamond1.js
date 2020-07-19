// /models/Diamond1.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    summonerName: String,
    // summonerId: String,
    // leaguePoints: String,
    // rank: String,
    // wins: String,
    // losses: String,
    // veteran: Boolean,
    // inactive: Boolean,
    // freshBlood: Boolean,
    // hotStreak: Boolean,
    // tier: String,
    // Winrate: String
})

mongoose.model('diamond1s', productSchema);