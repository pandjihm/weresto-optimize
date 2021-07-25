const assert = require('assert');

Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/like');
});

const firstCondition = "You don't have any Favorite Restaurant";

Scenario('showing empty favorite restaurant', ({I}) => {
  I.seeElement('#restaurants');
  I.see(firstCondition, '#restaurants');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see(firstCondition, '#restaurants');

  I.amOnPage('/');

  I.seeElement('.card-fifth a');
  const firstCard = locate('.h4-judul-resto').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.h4-judul-resto');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.see(firstCondition, '#restaurants');

  I.amOnPage('/');


  I.seeElement('.card-fifth a');
  const firstCard = locate('.h4-judul-resto').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  
  I.seeElement('#likeButton');
  I.click('#likeButton');

  
  I.amOnPage('/#/favorite');
  I.seeElement('.card-fifth');
  const likedCardTitle = await I.grabTextFrom('.h4-judul-resto');
  assert.strictEqual(firstCardTitle, likedCardTitle);


  I.click(likedCardTitle);


  I.seeElement('#likeButton');
  I.click('#likeButton');


  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  const noFavRestaurant = await I.grabTextFrom('#restaurants');

  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('Customer review', async ({I}) => {
  I.see(firstCondition, '#restaurants');

  I.amOnPage('/');

  I.seeElement('.card-fifth a');
  I.click(locate('.h4-judul-resto').first());

  I.seeElement('.form-review form');

  const textReview = 'Review from E2E testing';
  I.fillField('inputName', 'Pandji');
  I.fillField('inputReview', textReview);

  I.click('#submit-review');

  const lastReview = locate('.restaurant-reviews').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
