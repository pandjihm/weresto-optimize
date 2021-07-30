import CONFIG from '../../globals/config';

const RestaurantDetail = (restaurant) => `
  <div class="grid-detail">
    <div>
      <picture>
        <img class="detail-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      </picture>
    </div>
    <div class="detail-info">  
      <h2 class="detail-nama">${restaurant.name}</h2>
      <p>${restaurant.address}</p>
      <div class="grid-city-rating">
        <div class="city-detail">
          <p class="p-city">${restaurant.city}</p>
        </div>
        <div class="rating-detail">
            <img tabindex="0" src="../images/heros/star.svg" width="14vh" alt="rating"> 
            <p tabindex="0" class="p-rating-detail">${restaurant.rating}</p>
        </div>
      </div>
      <div class="flex-category">
        <h4>Category:</h4>
        <div class="p-category">
          ${restaurant.categories.map((categorie) => `
              <span class="categorie-restaurant">${categorie.name}</span>
            `).join('')}
        </div>
      </div>
      <h4>Food Menu:</h4>
      <p class="p-padding">${restaurant.menus.foods.map((food) => food.name)}</p>
      <h4>Drink Menu:</h4>
      <p class="p-padding">${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    </div>
  </div>
  <div class="desc-pad">
    <h4 tabindex="0">Description:</h4>
    <p tabindex="0" class="p-padding">${restaurant.description}</p>
    <h4 tabindex="0" class="review-padding">Reviews:</h4>
    <div class="form-review">
          <form>
            <div class="form-margin">
              <label for="inputName" class="form-label">Name:</label>
              <input name="inputName" type="text" class="form-input" id="inputName" placeholder="Your Complete Name">
            </div>
            <div class="form-margin">
              <label for="inputReview" class="form-label">Review:</label>
              <input name="inputReview" type="text" class="form-input input-pad" id="inputReview" placeholder="Your Experience in This Restaurant">
            </div>
            <button id="submit-review" type="submit" class="tombol sub-review">Submit</button>
          </form>
        </div>
    <div class="restaurant-reviews">
      ${restaurant.customerReviews.map((review) => `
        <div class="grid-review">
          <div class="review-review">
            <p tabindex="0">${review.name}</p>
            <h5 tabindex="0" class="p-city">${review.date}</h5>
          </div>
          <div class="review-review">
            <p tabindex="0" class="p-review">${review.review}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const RestaurantItem = (restaurants) => `
  <div>
    <div class="card-fifth">
        <div class="rating">
            <img tabindex="0" data-src="../images/heros/star.svg" width="14vh" alt="rating"> 
            <p tabindex="0" class="p-rating">${restaurants.rating}</p>
        </div>
        <picture>
          <img tabindex="0" class="img-fifth lazyload" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        </picture>
        <div class="city">
          <p tabindex="0" class="p-city">${restaurants.city}</p>
        </div>
        <h4 tabindex="0" class="h4-judul-resto"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h4>
        <p tabindex="0" class="p-fifth">${restaurants.description}</p>
        <div class="arrow">
          <p><a href="${`/#/detail/${restaurants.id}`}">Find Out More</p>
          <img tabindex="0" class="img-arrow" src="../images/heros/arrow.svg" width="16vh" alt="arrow"></a>
        </div>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const Spinner = () => `
  <div class="spinner-wrapper">
    <span class="spinner-grow hitam" role="status"></span>
    <span class="spinner-grow grey" role="status"></span>
    <span class="spinner-grow abu" role="status"></span>
  </div>
`;

export default Spinner;

export {
  RestaurantDetail,
  RestaurantItem,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  Spinner,
};
