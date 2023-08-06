import { getElement } from '../utils.js';

const toggleDarkBtn = getElement('.toggle-dark');

toggleDarkBtn.addEventListener('click', () => {
    console.log(document.documentElement.classList);
  document.documentElement.classList.toggle('dark-theme');
  
});
