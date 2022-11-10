const mongoose = require('mongoose');
const {config} = require('dotenv');

config();

async function connect(uri) {
    try {
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL);
        console.log('Connected to db');
    } catch (error) {
        console.log(error)
    }

}

module.exports = connect