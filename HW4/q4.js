// Define the book object
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    available: true, // Indicates if the book is available for borrowing

    // Method to mark the book as unavailable
    borrowBook: function () {
        if (book.available) {
            book.available = false;
            console.log("You have borrowed " + book.title );
        } else {
            console.log("Sorry, " + book.title + " is already borrowed.");
        }
    },

    // Method to mark the book as available
    returnBook: function () {
        if (!book.available) {
            book.available = true;
            console.log("You have returned " + book.title );
        } else {
            console.log(  book.title + " was not borrowed.");
        }
    },

    // Method to display the book details
    printDetails: function () {
        console.log("Title: " + book.title);
        console.log("Author: " + book.author);
        console.log("Year: " + book.year);
        console.log("Available: " + (book.available ));
    }
};

// Print the book details before any action
console.log("Book details before any action:");
book.printDetails();

// Borrow the book
console.log("Attempting to borrow the book:");
book.borrowBook();

// Print the book details after borrowing
console.log("Book details after borrowing:");
book.printDetails();

// Return the book
console.log("Attempting to return the book:");
book.returnBook();

// Print the book details after returning
console.log("Book details after returning:");
book.printDetails();