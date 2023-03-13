import searchApi from './api.js';
import renderPage from './dom.js';

const search = document.getElementById('search-button');
search.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(searchApi());
  renderPage(searchApi());
});
