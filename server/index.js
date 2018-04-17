const express = require('express');
const db = require('../server/index');

const app = express();
app.use(express.static('public'));

// GET route
app.get('/listing/reviews/', (req, res) => db.query('SELECT * FROM reviews').then(data => res.send(data)).catch(err => console.log`⚠️ Error responding to GET request: ${err}`));

// POST route
