import { courses } from './src/courses.js';
import { initNavigation } from './src/navigation.js';
import { renderCourses } from './src/render.js';
import { initSearch } from './src/search.js';

renderCourses(courses);
initNavigation(courses, renderCourses);
initSearch(courses, renderCourses);
