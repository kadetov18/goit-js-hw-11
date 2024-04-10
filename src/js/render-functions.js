// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');
let loadingIndicator = document.querySelector('.loading-indicator');

export function renderImages(images) {
  images.forEach(image => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const imageElement = document.createElement('a');
    imageElement.href = image.largeImageURL;
    imageElement.classList.add('image-link');
    imageElement.innerHTML = `<img src="${image.webformatURL}" width="360" alt="${image.tags}" loading="lazy">`;

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const likes = document.createElement('span');
    likes.textContent = `Likes: ${image.likes}`;

    const views = document.createElement('span');
    views.textContent = `Views: ${image.views}`;

    const comments = document.createElement('span');
    comments.textContent = `Comments: ${image.comments}`;

    const downloads = document.createElement('span');
    downloads.textContent = `Downloads: ${image.downloads}`;

    infoContainer.appendChild(likes);
    infoContainer.appendChild(views);
    infoContainer.appendChild(comments);
    infoContainer.appendChild(downloads);

    imageCard.appendChild(imageElement);
    imageCard.appendChild(infoContainer);
    galleryElement.appendChild(imageCard);
  });

  hideLoadingIndicator();

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function showLoadingIndicator() {
  if (!loadingIndicator) {
    loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading-indicator');
    loadingIndicator.textContent = 'Loading...';
    document.body.appendChild(loadingIndicator);
  }
}

export function hideLoadingIndicator() {
  if (loadingIndicator) {
    loadingIndicator.remove();
    loadingIndicator = null;
  }
}

export function showMessage(message) {}
