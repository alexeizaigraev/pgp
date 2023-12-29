const pgp = require('pg-promise')();
//const CONNECTION_STRING = require('../config-db')
const CONNECTION_STRING = process.env.CONNECTION_STRING
//console.log(CONNECTION_STRING, "CONNECTION_STRING")

const db = pgp("postgres://postgres:postgres@localhost:5432/pgp"); // database instance;
module.exports = db