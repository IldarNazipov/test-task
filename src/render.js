const cardsWrapper = document.querySelector('.cards');

export const renderCourses = (filteredCourses) => {
  cardsWrapper.innerHTML = '';

  if (filteredCourses.length === 0) {
    const h4 = document.createElement('h4');
    h4.textContent = 'Nothing found';
    h4.classList.add('cards__not-found');
    cardsWrapper.appendChild(h4);
    return;
  }

  filteredCourses.forEach((course) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('card__image');
    image.alt = course.speaker;
    image.src = `./src/images/${course.image}`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    const categoryBadge = document.createElement('span');
    const categoryClass = course.category.split(' ')[0].toLowerCase();
    categoryBadge.classList.add(
      'card__category',
      `card__category--${categoryClass}`
    );
    categoryBadge.textContent = course.category;

    const title = document.createElement('h3');
    title.classList = 'card__title';
    title.textContent = course.title;

    const info = document.createElement('div');
    info.classList = 'card__info';

    const price = document.createElement('span');
    price.classList = 'card__price';
    price.textContent = `$${course.price}`;

    const divider = document.createElement('span');
    divider.classList = 'card__divider';

    const speaker = document.createElement('span');
    speaker.classList = 'card__speaker';
    speaker.textContent = `by ${course.speaker}`;

    info.appendChild(price);
    info.appendChild(divider);
    info.appendChild(speaker);

    cardContent.appendChild(categoryBadge);
    cardContent.appendChild(title);
    cardContent.appendChild(info);

    card.appendChild(image);
    card.appendChild(cardContent);

    cardsWrapper.appendChild(card);
  });
};
