const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const firstCondition = "You don't have any Favorite Restaurant";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(firstCondition, '#restaurants');
});
Scenario('unliking one restaurant', async ({ I }) => {
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
  const unlikedCardTitle = await I.grabTextFrom('.detail-nama');
  assert.strictEqual(firstCardTitle, unlikedCardTitle);

  I.seeElement('.card-fifth a');
  await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(firstCondition, '#restaurants');
});
