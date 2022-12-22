const library = document.getElementById('content');
const submit = document.getElementById('submit');
const formName = document.getElementById('name');
const formAuthor = document.getElementById('author');

const myLibrary = [
  { name: 'Thor', author: 'Marvel' },

  { name: 'Spiderman', author: 'Peter Parker' },
];

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBookToLibrary(name, author) {
  const book = new Book(name, author);
  myLibrary.push(book);
  console.log(myLibrary)
}

function removeLibraryContent() {
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
}

function addRemoveButton(book, div) {
  const button = document.createElement('button');
  button.innerHTML = 'Remove';
  button.classList.add('book', 'remove');
  button.dataset.arrayRef = `${myLibrary.indexOf(myLibrary[book])}`;
  div.appendChild(button);
}

function addLibraryContent() {
  for (const book in myLibrary) {
    const div = library.appendChild(document.createElement('div'));
    div.textContent = `${myLibrary[book].name} ${myLibrary[book].author}`;
    addRemoveButton(book, div);
}}


function listenRemoveButton() {
  const booksNodelist = document.querySelectorAll('[data-array-ref]');
  const booksArray = [...booksNodelist];
  booksArray.forEach((button) => button.addEventListener('click', (e) => {
    console.log(e.target.dataset.arrayRef);
    myLibrary.splice([`${e.target.dataset.arrayRef}`], 1);
    refreshLibraryContent();
  }));
}

function refreshLibraryContent() {
  removeLibraryContent();
  addLibraryContent();
  listenRemoveButton();
}

submit.addEventListener('click', () => {
  event.preventDefault();
  const name = formName.value;
  const author = formAuthor.value;
  addBookToLibrary(name, author);
  refreshLibraryContent();
});

refreshLibraryContent();
