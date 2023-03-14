import { photoesDescription } from './data.js';
function addsPicturesTemplates() {
  const picturesContainer = document.querySelector('.pictures');
  const picturesFragment = document.createDocumentFragment();


  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const pictures = photoesDescription();

  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(pictureElement);
  });

  return picturesContainer.append(picturesFragment);
}

export {addsPicturesTemplates};
