const Router = require('express').Router;
const advertisementsRouter = new Router();
const bodyParser = require('body-parser');

const db = require('../../db');
const advertisementEventEmitter = require('../../AdvertisementEventEmitter');

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
		advertisementEventEmitter.emit('event:add:advertisement', req.get('userId'));
		res.json(doc);
	});
});

advertisementsRouter.put('/:id', jsonParser, (req, res) => {
	db.advertisements.update({ _id: req.params.id }, req.body, (err, doc) => {
		advertisementEventEmitter.emit('event:edit:advertisement', req.get('userId'));
		res.json(doc);
	});
});

advertisementsRouter.get('/db/drop', (req, res) => {
	if (!req.query.confirm) {
		res.json({
			message: 'Confirm by passing query param ?confirm'
		});

		return;
	}

	db.advertisements.remove({}, { multi: true }, () => {
		res.json({
			message: 'advertisement db dropped'
		});
	})
});

module.exports = advertisementsRouter;
