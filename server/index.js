const express = require('express');
const mysql = require('promise-mysql');
const bodyParser = require('body-parser');

let connection;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/listings/:listingId/reviews/', (req, res) => {
  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etsycutioner',
  }).then((conn) => {
    // capture connection
    connection = conn;
    // retrieve all listings for shop
    return connection.query('SELECT shop FROM listings WHERE listings.id = ?', req.params.listingId);
  }).then((data) => {
    // pick shop id out of data packet
    const { shop } = data[0];
    // return all reviews for shop
    return connection.query('SELECT DISTINCT reviews.id, reviews.person, reviews.shop, reviews.listing, reviews.body, reviews.date, reviews.stars FROM reviews, listings WHERE listings.shop = ? AND listings.shop = reviews.shop', shop);
  }).then(data => res.send(data))
    .catch(err => res.send`⚠️ Error responding to GET request: ${err}`);
});

app.post('/listings/:listingId/reviews/', (req, res) => {
  const {
    person, shop, listing, body, stars,
  } = req.body;
  const date = (new Date()).toISOString();
  const review = [
    person, shop, listing, body, date.split('T').join(' ').slice(0, 19), stars,
  ];
  let reviewsCount;
  let totalStars;
  let avgStarsPerCent;

  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etsycutioner',
  }).then((conn) => {
    // capture connection
    connection = conn;
    // insert review to database
    return connection.query('INSERT INTO reviews (person, shop, listing, body, date, stars) VALUES (?)', [review]);
  }).then(() => connection.query('SELECT reviews_count, avg_stars_per_cent FROM shops WHERE id = ?', shop))
    .then((data) => {
      // retrieve reviews_count and avg_stars_per_cent data from shops
      reviewsCount = data[0].reviews_count;
      avgStarsPerCent = data[0].avg_stars_per_cent;
      totalStars = reviewsCount * avgStarsPerCent;
      // add one new review to shop's count
      reviewsCount++;
      // add new stars to total stars
      totalStars += req.body.stars;
      // calculate new average star percentage for shop
      avgStarsPerCent = Number((totalStars / reviewsCount).toFixed(0));
    })
    // update shop review information
    .then(() => connection.query('UPDATE shops SET reviews_count = ?, avg_stars_per_cent = ? WHERE id = ?', [reviewsCount, avgStarsPerCent, shop]))
    .then(() => res.send`✅ Review submitted. Thank you for your feedback!`)
    .catch(err => res.send`⚠️ Error responding to POST request: ${err}`);
});

app.listen(6300, () => console.log`👌`);
