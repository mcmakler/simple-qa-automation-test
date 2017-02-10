const Router = require('express').Router;
const advertisements = require('./advertisements');

const routes = new Router();

routes.use('/advertisements', advertisements);

module.exports = routes;
