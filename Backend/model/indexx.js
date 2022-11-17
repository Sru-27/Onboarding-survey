const dbConfig = require("../db");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.infomodel = require("./info")(mongoose);

module.exports = db;