import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(basicLightbox);

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

function createGalleryItemsMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);
console.dir(galleryContainer);

galleryContainer.addEventListener("click", handlerGalleryItemClick);

function handlerGalleryItemClick(evt) {
  evt.preventDefault();

  const galleryItem = evt.target.closest(".gallery__item");

  if (!galleryItem) {
    return;
  }

  const modalImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${modalImg}" width="800" height="600">
`);
  instance.show();
}
