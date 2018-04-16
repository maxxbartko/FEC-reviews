const mysql = require('promise-mysql');
const {
  listings, people, reviews, shops,
} = require('./seedData');

mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'etsycutioner',
}).then(conn => conn.query('INSERT INTO people VALUES ?', [people]))
  .then(conn => conn.query('INSERT INTO shops VALUES ?', [shops]))
  .then(conn => conn.query('INSERT INTO listings VALUES ?', [listings]))
  .then(conn => conn.query('INSERT INTO reviews VALUES ?', [reviews]))
  .then(conn => conn.end())
  .catch(err => console.error(err));
