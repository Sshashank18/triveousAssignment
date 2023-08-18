const mongoose = require('mongoose');
const env = require('../config/env');
mongoose.connect(`mongodb+srv://${env.MONGOOSE_USERNAME}:${env.MONGOOSE_PASSWORD}@triveousassignment.hgggowe.mongodb.net/`);

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting to Mongodb"));

db.once('open',function(){
    console.log('Connected to Database: Mongodb');
})

module.exports = db;