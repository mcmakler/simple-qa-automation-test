const Datastore = require('nedb');

const db = {};

db.advertisements = new Datastore({ filename: 'db/advertisements.db', autoload: true });

module.exports = db;

