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
  const div = library.appendChild(document.createElement('div'));
  div.innerHTML = `${myLibrary.slice(-1)[0].name} ${myLibrary.slice(-1)[0].author}`;
}

for (const book in myLibrary) {
  const div = library.appendChild(document.createElement('div'));
  div.innerHTML = `${myLibrary[book].name} ${myLibrary[book].author}`;
}

submit.addEventListener('click', () => {
  event.preventDefault();
  const name = formName.value;
  const author = formAuthor.value;
  addBookToLibrary(name, author);
});

