const library = document.getElementById('content');
const submit = document.getElementById('submit');
const formName = document.getElementById('name');
const formAuthor = document.getElementById('author');

const myLibrary = [
  { name: 'Thor', author: 'Marvel', isRead: false },

  { name: 'Spiderman', author: 'Peter Parker', isRead: false },
];

function Book(name, author) {
  this.name = name;
  this.author = author;
  this.isRead = false;
}

function addBookToLibrary(name, author) {
  const book = new Book(name, author);
  myLibrary.push(book);
  console.log(myLibrary);
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

function addIsReadButton(book, div) {
  const read = document.createElement('button');
  read.innerHTML = 'Read';
  read.classList.add('book', 'read');
  read.dataset.isRead = `${myLibrary.indexOf(myLibrary[book])}`;
  div.appendChild(read);
}

function addLibraryContent() {
  for (const book in myLibrary) {
    const div = library.appendChild(document.createElement('div'));
    div.textContent = `${myLibrary[book].name} ${myLibrary[book].author} ${myLibrary[book].isRead}`;
    addIsReadButton(book, div);
    addRemoveButton(book, div);
  }
}

function listenRemoveButton() {
  const booksNodelist = document.querySelectorAll('[data-array-ref]');
  const booksArray = [...booksNodelist];
  booksArray.forEach((button) => button.addEventListener('click', (e) => {
    console.log(e.target.dataset.arrayRef);
    myLibrary.splice([`${e.target.dataset.arrayRef}`], 1);
    refreshLibraryContent();
  }));
}

function listenIsReadButton() {
  const readNodelist = document.querySelectorAll('[data-is-read]');
  const readArray = [...readNodelist];
  readArray.forEach((button) => button.addEventListener('click', (e) => {
    if (myLibrary[e.target.dataset.isRead].isRead === false) {
      myLibrary[e.target.dataset.isRead].isRead = true;
    } else {
      myLibrary[e.target.dataset.isRead].isRead = false;
    };
    refreshLibraryContent()
  }));
}

function refreshLibraryContent() {
  removeLibraryContent();
  addLibraryContent();
  listenIsReadButton();
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
