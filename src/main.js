import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.searchInput.value.trim();

  if (query === '') {
    render.emptyRow();
    return;
  }

  gallery.innerHTML = render.getLoaderHtml();

  api.sendRequest(query, handleResponse);
});

function handleResponse(response) {
  if (!response.total && response.total == 0) {
    render.showAlertNotFound();
    gallery.innerHTML = '';
    return;
  }
  const images = response.hits;
  console.log('response', response);
  const galleryFilling = render.getImagesHtml(images);

  gallery.innerHTML = galleryFilling;

  render.lightbox.refresh();
}
