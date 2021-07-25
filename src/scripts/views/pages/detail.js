import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { RestaurantDetail, Spinner } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/add-review';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="loading"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const loading = document.querySelector('#loading');
    loading.innerHTML = Spinner();

    try {
      const dataRestaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = RestaurantDetail(dataRestaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: dataRestaurant,
      });

      loading.style.display = 'none';
    } catch (err) {
      restaurantContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
      loading.style.display = 'none';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan harus diisi');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
