// Bring in our dependencies
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const routes = require('./routes');
const LIST_APP_PORT = process.env.LIST_APP_PORT || 3000;

routes.get('/', (req, res) => {
	res.json({
		hello: 'world',
	});
});

//Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(LIST_APP_PORT, () => {
	console.log(`App listening on port ${LIST_APP_PORT}`);
});

// Socket IO
io.on('connection', (socket) => {
});
