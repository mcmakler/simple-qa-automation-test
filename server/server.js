// Bring in our dependencies
const fallback = require('express-history-api-fallback');
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

require('./socket')(server);

const routes = require('./routes');
const LIST_APP_PORT = process.env.LIST_APP_PORT || 3000;

//Connect all our routes to our application
app.use('/api', routes);

const client = path.join(__dirname, '..', 'www');

app.use(express.static(client));
app.use(fallback('index.html', { root: client }));

// Turn on that server!
server.listen(LIST_APP_PORT, () => {
	console.log(`App listening on port ${LIST_APP_PORT}`);
});

