import {
  type Book,
  type BookStatus,
} from "../types/book";

export default function getBooksByStatus(
  books: Book[],
  status: BookStatus
): Book[] {
  return books.filter((book) => {
    return book.status === status;
  });
}