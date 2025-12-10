import { debounce } from './utils/debounce.js';

export const initSearch = (courses, renderCourses) => {
  const searchInput = document.querySelector('.search__input');

  const handleSearch = debounce((e) => {
    const query = e.target.value.toLowerCase().trim();
    document
      .querySelectorAll('.navigation__tab')
      .forEach((t) => t.classList.remove('navigation__tab--active'));

    const searchedCourses =
      query.length > 0
        ? courses.filter((course) => course.title.toLowerCase().includes(query))
        : courses;

    renderCourses(searchedCourses);
  }, 300);

  searchInput.addEventListener('input', handleSearch);
};
