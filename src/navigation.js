export const initNavigation = (courses, renderCourses) => {
  const navigationTabs = document.querySelectorAll('.navigation__tab');

  navigationTabs.forEach((tab) => {
    const category = tab.dataset.category;
    const filtered = courses.filter((course) => course.category === category);

    tab.querySelector('.navigation__tab-count').textContent =
      category === 'All' ? courses.length : filtered.length;

    tab.addEventListener('click', () => {
      navigationTabs.forEach((t) =>
        t.classList.remove('navigation__tab--active')
      );
      tab.classList.add('navigation__tab--active');

      const coursesToRender = category === 'All' ? courses : filtered;

      renderCourses(coursesToRender);
    });
  });
};
