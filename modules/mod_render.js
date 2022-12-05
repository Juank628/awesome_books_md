export class Render {
  constructor(parentElement) {
    this.parentElement = parentElement
  }

  show(array) {
    let listHtml = '';
    for (let i = 0; i < array.length; i += 1) {
      listHtml += `
          <div class="book-row" id="book-${i}">
            <p>${array[i].title}</p>
            <p>by</p>
            <p>${array[i].author}</p>
            <button type="button" id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
            <hr>
          </div>`;
    }
    this.parentElement.innerHTML = listHtml;
  }
}
