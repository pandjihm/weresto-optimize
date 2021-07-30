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
  I.seeElement('.grid-detail');
  const likedCardTitle = await I.grabTextFrom('.detail-nama');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});
/*
Scenario('unliking one restaurant', async ({I}) => {
  I.see(firstCondition, '#restaurants');

  I.amOnPage('/#/like');

  I.amOnPage('/');

  I.seeElement('.card-fifth a');
  const firstCard = locate('.h4-judul-resto').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.grid-detail');
  const likedCardTitle = await I.grabTextFrom('.detail-nama');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

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

  const lastReview = locate('.form-review').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
*/