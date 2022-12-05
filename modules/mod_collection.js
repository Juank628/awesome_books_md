export class Collection {
  constructor(collectionName, items) {
    this.collectionName = collectionName;
    this.items = items;
  }

  addBook(title, author) {
    const newBook = {
      title,
      author,
    };
    this.items.push(newBook);
    localStorage.setItem(this.collectionName, JSON.stringify(this.items));
  }

  removeBook(itemToRemove) {
    console.log(itemToRemove);
    this.items.splice(itemToRemove, 1);
    localStorage.setItem(this.collectionName, JSON.stringify(this.items));
  }

  getBooks() {
    return this.items;
  }
}
