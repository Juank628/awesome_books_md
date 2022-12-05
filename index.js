const addButton = document.getElementById('btn-add');

class UI {
  constructor(books, removeButtons, listSection, title, author) {
    this.books = books || [];
    this.removeButtons = removeButtons;
    this.listSection = listSection;
    this.title = title;
    this.author = author;
  }

  showList() {
    let listHtml = '';
    for (let i = 0; i < this.books.length; i += 1) {
      listHtml += `
          <div class="book-row" id="book-${i}">
            <p>${this.books[i].title}</p>
            <p>${this.books[i].author}</p>
            <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
            <hr>
          </div>`;
    }
    this.listSection.innerHTML = listHtml;
    this.addRevomeEvents(); /* eslint-disable-line */
  }

  addBook() {
    console.log(this);
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
    const newBook = {
      title: this.title,
      author: this.author,
    };
    this.books.push(newBook);
    this.showList();
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(e) {
    const titleToRemove = e.currentTarget.previousElementSibling.previousElementSibling.textContent;
    this.books = this.books.filter((book) => book.title !== titleToRemove);
    this.showList();
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addRevomeEvents() {
    this.removeButtons = document.querySelectorAll('.btn-remove');
    this.removeButtons.forEach((button) => {
      button.addEventListener('click', (e) => this.removeBook(e));
    });
  }
}

const collection = new UI(
  JSON.parse(localStorage.getItem('books')),
  document.querySelectorAll('.btn-remove'),
  document.getElementById('list-sec'),
  document.getElementById('title'),
  document.getElementById('author')
);

collection.showList();

addButton.addEventListener('click', () => collection.addBook());
