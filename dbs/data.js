const faker = require('faker');

let listings = {};
let people = {};
let reviews = {};
let shops = {};

// const makeTableObjects = () => {
//   for (let i = 0; i < 100; i++) {
//     listingIDs.push();
//   }
// };

INSERT INTO listings VALUES (
  666666666+i,
  faker.fake('{{commerce.product}}'),
  faker.fake('{{image.image}}'),
  Math.floor(Math.random() * 100)
);

INSERT INTO people VALUES (
  i,
  faker.fake('{{name.firstName}} {{name.lastName}}'),
  faker.fake('{{image.avatar}}')
);

INSERT INTO reviews VALUES (
  i,
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  666666666 + Math.floor(Math.random() * 100),
  faker.fake('{{lorem.paragraphs}}'),
  faker.fake('{{date.past(5)}}'),
  Math.floor(Math.random() * 5) + 1
);

INSERT INTO shops VALUES (
  i,
  faker.fake('[[company.companyName}}'),
)

// )

// makeListingIDs();

// // listings
// 666666666 + i;
// // Names
// faker.fake('{{name.firstName}} {{name.lastName}}')
// // photosurls from Ahmad
// // shops
// Math.floor(Math.random() * 100);



// // people
// IDs 1-100
// Name
// faker.fake('{{name.firstName}} {{name.lastName}}');
// photo Ahmad?

// reviews
// id 1-100
// person 1-100
// shop 1-100
// listing 666666666-766
// body lorem
// date date in last five years
// stars 1-10

// shops
// IDs 1-100
// name Lorem
// review_count counted from array
// avg_stars calculated and added last

console.log();