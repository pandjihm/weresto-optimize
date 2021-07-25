import RestaurantSource from '../../data/restaurant-source';
import { RestaurantItem, Spinner } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
        <div id="loading"></div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    loading.innerHTML = Spinner();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';

    try {
      const restaurant = await RestaurantSource.ListRestaurant();
      const totalRest = restaurant.length;
      restaurant.forEach((restaurants, index) => {
        restaurantsContainer.innerHTML += RestaurantItem(restaurants, index, totalRest);
      });
      loading.style.display = 'none';
    } catch (err) {
      loading.style.display = 'none';
      restaurantsContainer.innerHTML = `Error: ${err}, try to refresh!`;
    }
  },
};

export default ListRestaurant;
