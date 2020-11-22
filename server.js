// Local Server

/*================================================================================================================
Modules
==================================================================================================================*/

const express = require('express'); // server
const mustache = require('mustache-express');
const colors = require('colors');

const path = require('path');
const config = require('./config');



/*================================================================================================================
Variables
==================================================================================================================*/

// Server

// express server
const app = express();


// Global constants
const lit = {
	engine: 'mst',
};


// Directories

// dir with main server
const dirViews = path.join(__dirname, 'views');
// dir with templates
const dirPartials = path.join(dirViews, 'partials');



/*================================================================================================================
Main
==================================================================================================================*/

// public server code
app.use(express.static('public'));

app.engine(lit.engine, mustache(dirPartials));

app.set('views', dirViews);
app.set('view engine', lit.engine);


// Render path and content website

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/sponsors/:id', (req, res) => {
	const id = parseInt(req.params.id);
	res.render('sponsors', {
		sponsorsId: id,
	});
});





// API
// app.use((req, res) => res.send('OK'));

// start server
app.listen(config.port, config.hostname, () => { console.log(`The server is listening at http://localhost:${config.port}`.red); });





/*===============THE=END===============THE=END===============THE=END===============THE=END===============THE=END=*/