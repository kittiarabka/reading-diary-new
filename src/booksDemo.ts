import { initialBooks } from "./data/books";
import getBooksByStatus from "./utils/getBooksByStatus";

const completedBooks = getBooksByStatus(
  initialBooks,
  "done"
);

console.log(
  "Прочитанные книги:",
  completedBooks
);