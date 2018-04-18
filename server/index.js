const express = require('express');
const mysql = require('promise-mysql');

const app = express();
let connection;
// let shopId;
app.use(express.static('public'));

app.get('/listings/:listingId/reviews/', (req, res) => {
  console.log('G E T request');

  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etsycutioner',
  }).then((conn) => {
    connection = conn;
    return connection.query(`SELECT shop FROM listings WHERE listings.id = ${req.params.listingId}`);
  }).then((packet) => {
    const { shop } = packet[0];
    return connection.query(`SELECT DISTINCT reviews.id, reviews.person, reviews.shop, reviews.listing, reviews.body, reviews.date, reviews.stars FROM reviews, listings WHERE listings.shop = ${shop} AND listings.shop = reviews.shop`);
  }).then(data => res.send(data))
    .catch(err => console.log`⚠️ Error responding to GET request: ${err}`);
});

// app.post('listings/:listingId/reviews/', (req, res) => {
//   console.log('P O S T request');

//   const {
//     person, shop, listing, body, stars,
//   } = req.body;
//   const date = (new Date()).toISOString();
//   const review = [
//     person, shop, listing, body, date.split('T').join(' ').slice(0, 19), stars,
//   ];

//   let reviewsData;

//   mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'etsycutioner',
//   }).then((conn) => {
//     connection = conn;
//     return connection.query('INSERT INTO reviews VALUES (person, shop, listing, body, date, stars) ?', [review]);
//   }).then(() => connection.query(`SELECT reviews_count, avg_stars_per_cent FROM shops WHERE shops.id = ${shop}`))
//     .then((packet) => {
//       console.log(packet);
//       const { reviewsCount, avgStarsPerCent } = packet[0];
//     })
//     .then(data => res.send(data))
//     .catch(err => console.log`⚠️ Error responding to GET request: ${err}`);
// });

app.listen(6300, () => console.log`👌`);

// post request
// first: insert into db
// then: retrieve shop reviews length and average
// then: overwrite shop reviews length and average
