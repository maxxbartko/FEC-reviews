const express = require('express');
const mysql = require('promise-mysql');
const bodyParser = require('body-parser');

let connection;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/listings/:listingId/reviews/', (req, res) => {
  const { listingId } = req.params;

  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etsycutioner',
    multipleStatements: true,
  }).then((conn) => {
    connection = conn;
    // INNER JOIN to SELECT all shop data in this first go
    return connection.query('SELECT shop FROM listings WHERE listings.id = ?', listingId);
  }).then(([data]) => {
    // revise which part of the data the shopId comes from
    const { shop } = data;
    // do INNER JOIN and name columns AS to make comprehensive review entries, complete with listing and person (shop should probably still have its own query)
    // https://www.w3schools.com/sql/sql_join.asp
    return connection.query('SELECT DISTINCT reviews.* FROM reviews, listings WHERE listings.shop = ? AND listings.shop = reviews.shop ORDER BY FIELD(reviews.listing, ?) DESC, reviews.date DESC; SELECT * FROM listings WHERE shop = ? ORDER BY FIELD(id, ?) DESC, id DESC; SELECT * FROM people WHERE id IN (SELECT person FROM reviews WHERE shop = ?) ORDER BY id DESC; SELECT * FROM shops WHERE id = ?', [shop, listingId, shop, listingId, shop, shop]);
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
  let avgStarsOutOf100;

  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etsycutioner',
  }).then((conn) => {
    connection = conn;
    return connection.query('INSERT INTO reviews (person, shop, listing, body, date, stars) VALUES (?)', [review]);
  }).then(() => connection.query('SELECT reviews_count, avg_stars_out_of_100 FROM shops WHERE id = ?', shop))
    .then(([data]) => {
      reviewsCount = data.reviews_count;
      avgStarsOutOf100 = data.avg_stars_out_of_100;
      // total = average / 100 (convert to %) * 5 (potential stars per review) * # of reviews
      totalStars = avgStarsOutOf100 * (reviewsCount / 20);
      reviewsCount++;
      totalStars += req.body.stars;
      avgStarsOutOf100 = Number((totalStars * (20 / reviewsCount)).toFixed(0));
    })
    .then(() => connection.query('UPDATE shops SET reviews_count = ?, avg_stars_out_of_100 = ? WHERE id = ?', [reviewsCount, avgStarsOutOf100, shop]))
    .then(() => res.send`✅ Review submitted. Thank you for your feedback!`)
    .catch(err => res.send`⚠️ Error responding to POST request: ${err}`);
});

app.listen(6300, () => console.log`👌`);
