const books = [
  { title: "Book 1", author: "Author 1", price: "10.99" },
  { title: "Book 2", author: "Author 2", price: "12.99" },
  { title: "Book 3", author: "Author 3", price: "10.99" },
  { title: "Book 4", author: "Author 4", price: "20.50" },
  { title: "Book 5", author: "Author 5", price: "2.20" },
  { title: "Book 6", author: "Author 6", price: "80.00" },
  // Add more book data here
];

function searchBooks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput)
  );
  displayBooks(filteredBooks);
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
          <h2>${book.title}</h2>
          <p>Author: ${book.author}</p>
          <p>Price: $${book.price}</p>
      `;
    bookList.appendChild(bookElement);
  });
}

// Initially display all books
displayBooks(books);
