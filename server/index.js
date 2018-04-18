const express = require('express');
const mysql = require('promise-mysql');

const app = express();
let connection;
let shopId;
app.use(express.static('public'));

app.get('/:listingId/reviews/', (req, res) => {
  console.log('G E T');
  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etsycutioner',
  }).then((conn) => {
    connection = conn;
    return connection.query(`SELECT shop FROM listings WHERE listings.id = ${req.params.listingId}`);
  }).then((packet) => {
    shopId = packet[0].shop;
    return connection.query(`SELECT * FROM reviews, listings WHERE listings.shop = ${shopId} AND listings.shop = reviews.shop`);
  }).then(data => res.send(data))
    .catch(err => console.log`⚠️ Error responding to GET request: ${err}`);
});

app.listen(6300, () => console.log`👌`);

//   console.log('G E T');
//   mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'etsycutioner',
//   }).then(conn => conn.query(`SELECT * FROM reviews`))
//   .then(data => console.log(data))
//   .then(res.end())
//   .catch(err => console.log`⚠️ Error responding to GET request: ${err}`);
// res.send('hello world');
// }

// POST route

// tried
// serving index ✅
// serving 'hello world' from '/reviews/' ❎
// console logging to webpack-dev-server ❎
// console logging to nodemon ❎
// devtools on webpack-dev-server ❎
// devtools on nodemon ❎

// original implementation
// const express = require('express');
// const mysql = require('promise-mysql');

// const app = express();
// app.use(express.static('public'));

// // GET route
// app.get('/:listingId/reviews/', (req, res) => {
//   console.log('G E T');
//   mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'etsycutioner',
//   }).then(conn => conn.query(`SELECT * FROM reviews`))
//     .then(data => console.log(data))
//     .then(res.end())
//     .catch(err => console.log`⚠️ Error responding to GET request: ${err}`);
// }

// // POST route
