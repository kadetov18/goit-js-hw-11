// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js'; // Відносний шлях до pixabay-api.js в папці js
import {
  renderImages,
  showLoadingIndicator,
  hideLoadingIndicator,
  showMessage,
} from './js/render-functions.js';

const form = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const keyword = searchInput.value.trim();
  if (keyword === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search keyword.',
      position: 'topRight',
    });
    return;
  }

  showLoadingIndicator();
  try {
    const images = await searchImages(keyword);
    hideLoadingIndicator();

    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    } else {
      renderImages(images);
    }
  } catch (error) {
    hideLoadingIndicator();
    showMessage(
      'An error occurred while fetching images. Please try again later.'
    );
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  }
});
