import Navigation from './modules/mod_navigation.js';
import Collection from './modules/mod_collection.js';
import Render from './modules/mod_render.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const addButton = document.getElementById('btn-add');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');
const listSection = document.getElementById('list-sec');
const addSection = document.getElementById('add-sec');
const contactSection = document.getElementById('contact-sec');
const dateText = document.querySelector('.date-text');

const navigation = new Navigation([listSection, addSection, contactSection]);
const books = new Collection(
  'books',
  JSON.parse(localStorage.getItem('books')) || [],
);
const render = new Render(listSection);

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.show('list-sec', 'block');
  render.show(books.getBooks());
});

addLink.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.show('add-sec', 'flex');
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.show('contact-sec', 'block');
});

addButton.addEventListener('click', () => {
  books.addBook(
    document.getElementById('title').value,
    document.getElementById('author').value,
  );
});

listSection.addEventListener('click', (e) => {
  if (!e.target.matches('.btn-remove')) return;
  books.removeBook(e.target.dataset.index);
  render.show(books.getBooks());
});

setInterval(() => {
  const {
    monthLong, day, year, hour, minute, second,
  } = DateTime.now();
  dateText.textContent = `${monthLong} ${day}th ${year}, ${hour}:${minute}:${second}`;
}, 1000);
