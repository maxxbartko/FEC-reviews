const mysql = require('promise-mysql');
const {
  listings, people, reviews, shops,
} = require('./seedData');

let connection;

mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'etsycutioner',
}).then((conn) => {
  connection = conn;
  connection.query('INSERT INTO people VALUES ?', [people]);
}).then(() => connection.query('INSERT INTO shops VALUES ?', [shops]))
  .then(() => connection.query('INSERT INTO listings VALUES ?', [listings]))
  .then(() => connection.query('INSERT INTO reviews VALUES ?', [reviews]))
  .then(() => connection.end())
  .catch(err => console.error`⚠️ ${err}`);
