import { Navigation } from './modules/mod_navigation.js';
import { Collection } from './modules/mod_collection.js';
import { Render } from './modules/mod_render.js'

const addButton = document.getElementById('btn-add');
const list_link = document.getElementById('list-link');
const add_link = document.getElementById('add-link');
const contact_link = document.getElementById('contact-link');
const list_section = document.getElementById('list-sec');
const add_section = document.getElementById('add-sec');
const contact_section = document.getElementById('contact-sec');

const navigation = new Navigation([list_section, add_section, contact_section]);
const books = new Collection('books', JSON.parse(localStorage.getItem('books')) || []);
const render = new Render(list_section)

list_link.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.show('list-sec', 'block');
  render.show(books.getBooks())
});

add_link.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.show('add-sec', 'flex');
});

contact_link.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.show('contact-sec', 'block');
});

addButton.addEventListener('click', () =>
  books.addBook(
    document.getElementById('title').value,
    document.getElementById('author').value
  )
);

list_section.addEventListener('click', (e) => {
    if (!e.target.matches('.btn-remove')) return;
    books.removeBook(e.target.dataset.index)
    render.show(books.getBooks())
})
