    const library = [];

    function Book(name, author, pages, read) {
      this.id = crypto.randomUUID();
      this.name = name;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

    function addBookToLibrary() {
      let bookName = document.getElementById("book-name");
      let bookAuthor = document.getElementById("book-author");
      let bookPages = document.getElementById("book-pages");
      let bookRead = document.querySelector('input[name="read"]:checked');

    if (!bookName.value || !bookAuthor.value || !bookPages.value || !bookRead) {
      alert("Please fill out all fields!");
      return;
    }

    // create a new book
    let newBook = new Book(
      bookName.value,
      bookAuthor.value,
      bookPages.value,
      bookRead.value
    );

    // add to array
    library.push(newBook);

    // clear input fields
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.checked = false;

    // refresh display
    displayBooks();
  }

    function displayBooks() {
      const display = document.getElementById("library-display");
      display.textContent = ""; // clear old display

      for (let i = 0; i < library.length; i++) {
        const book = library[i];

        let card = document.createElement("div");
        card.classList.add("book-card");
        card.setAttribute("data-id", book.id);

        let title = document.createElement("h3");
        title.textContent = book.name;

        let author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        let pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        let read = document.createElement("p");
        read.textContent = `Read: ${book.read}`;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
          removeBook(book.id);
        });

        // Append everything into the card
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(removeBtn);

        // Add card to display
        display.appendChild(card);
      }
    }

    function removeBook(id) {
      const index = library.findIndex(book => book.id === id);
      if (index !== -1) {
        library.splice(index, 1); // remove from array
        displayBooks(); // refresh UI
      }
    }

    // Add test books manually
    library.push(new Book("Harry Potter", "J.K. Rowling", 400, "Yes"));
    library.push(new Book("Atomic Habits", "James Clear", 320, "No"));
    displayBooks();

  let addbtn=document.getElementById("add-book-btn");
  let bookDialog = document.getElementById("book-dialog");
  let closeDialog = document.getElementById("close-dialog");

  addbtn.addEventListener("click", function() {
    bookDialog.showModal();
  });

  closeDialog.addEventListener("click", function() {
    bookDialog.close();
  });

  document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    bookDialog.close();
  });
