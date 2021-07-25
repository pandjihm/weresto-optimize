import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { RestaurantItem } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <div>
        </div>
        <div class="fav-resto">
          ---------------------------------------- <br />
          You don't have any Favorite Restaurant <br />
          ----------------------------------------
        </div>
      `;
    }
    const totalRest = restaurants.length;
    restaurants.forEach((restaurant, index) => {
      restaurantsContainer.innerHTML += RestaurantItem(restaurant, index, totalRest);
    });
  },
};

export default Like;
