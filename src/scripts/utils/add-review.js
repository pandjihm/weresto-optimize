import RestaurantSource from '../data/restaurant-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
  <div class="grid-review">
  <div class="review-review">
    <p tabindex="0">${name}</p>
    <h5 tabindex="0" class="p-city">${date}</h5>
  </div>
  <div class="review-review">
    <p tabindex="0" class="p-review">${review}</p>
  </div>
</div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
