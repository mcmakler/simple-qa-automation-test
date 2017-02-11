const Router = require('express').Router;
const advertisementsRouter = new Router();
const bodyParser = require('body-parser');

const db = require('../../db');
const jsonParser = bodyParser.json();

advertisementsRouter.get('/', (req, res) => {
	db.advertisements.find({}, (err, docs) => {
		res.json(docs);
	});
});

advertisementsRouter.get('/:id', (req, res) => {
	db.advertisements.findOne({ _id: req.params.id }, (err, doc) => {
		res.json(doc);
	});
});

advertisementsRouter.post('/', jsonParser, (req, res) => {
	db.advertisements.insert(req.body, (err, doc) => {
		res.json(doc);
	});
});

advertisementsRouter.put('/:id', jsonParser, (req, res) => {
	db.advertisements.update({ _id: req.params.id }, req.body, (err, doc) => {
		res.json(doc);
	});
});

module.exports = advertisementsRouter;
