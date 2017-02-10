const Router = require('express').Router;
const advertisementsRouter = new Router();
const bodyParser = require('body-parser');

const db = require('../../db');
const jsonParser = bodyParser.json();

const advertisements = db.addCollection('advertisements');

advertisementsRouter.get('/', (req, res) => {
	res.json(advertisements.find());
});

module.exports = advertisementsRouter;
