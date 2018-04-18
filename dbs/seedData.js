const faker = require('faker');
const moment = require('moment');

const listings = [];
const people = [];
const shopDataPerListing = {};
// when you plug in listing, it gives you shop.
const reviews = [];
const shops = [];
const reviewDataPerShop = {};

const renderISODate = (UTC) => {
  const output = moment.utc(UTC).toISOString();
  return output.split('T').join(' ').slice(0, 19);
};

const makeListingsPeople = (n = 100) => {
  for (let i = 1; i <= n; i++) {
    // listings
    const listing = [
      666666665 + i,
      faker.fake('{{company.catchPhraseAdjective}} {{commerce.productName}}'),
      faker.fake('{{image.imageUrl}}'),
      1 + Math.floor(Math.random() * (n / 4)),
    ];
    listings.push(listing);

    // people
    const person = [
      i,
      faker.fake('{{name.firstName}} {{name.lastName}}'),
      faker.fake('{{image.avatar}}'),
    ];
    people.push(person);
  }
};

const makeReviews = () => {
  const nReviews = Math.floor(listings.length * 4);

  for (let i = 1; i <= nReviews; i++) {
    const listing = 666666666 + Math.floor(Math.random() * (nReviews / 4));

    const review = [
      i,
      1 + Math.floor(Math.random() * (nReviews / 4)),
      shopDataPerListing[listing],
      listing,
      faker.fake('{{lorem.paragraphs}}'),
      renderISODate(faker.fake('{{date.past(5)}}')),
      1 + Math.floor(Math.random() * 5),
    ];
    reviews.push(review);
  }
};

const makeReviewDataPerShop = () => {
  const nShops = Math.floor(listings.length / 4);

  for (let i = 1; i <= nShops; i++) {
    reviewDataPerShop[i] = [0, 0];
  }

  for (let i = 1; i < (nShops * 16); i++) {
    const shop = reviews[i][2];
    const stars = reviews[i][6];
    reviewDataPerShop[shop][0]++;
    reviewDataPerShop[shop][1] += stars;
  }
};

const makeShops = () => {
  const nShops = Math.floor(listings.length / 4);
  for (let i = 1; i <= nShops; i++) {
    const reviewCount = reviewDataPerShop[i][0];
    const totalStars = reviewDataPerShop[i][1];
    const shop = [
      i,
      faker.fake('{{company.companyName}}'),
      reviewCount,
      reviewCount ? Math.floor((totalStars / reviewCount) * 20) : 0,
    ];
    shops.push(shop);
  }
};

makeListingsPeople();

for (let i = 0; i < listings.length; i++) {
  const id = listings[i][0];
  const shop = listings[i][3];
  shopDataPerListing[id] = shop;
}

makeReviews();
makeReviewDataPerShop();
makeShops();

module.exports = {
  listings, people, reviews, shops,
};
