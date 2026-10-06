import { type PracticeBook } from "./types";

export default function formatBookInfo(
  book: PracticeBook
): string {
  const ratingText =
    book.rating !== undefined
      ? `, оценка: ${book.rating}`
      : "";

  if (book.format === "paper") {
    const coverText = book.coverType
      ? `, обложка: ${book.coverType}`
      : "";

    return `${book.title} — печатная, ${book.pages} стр.${coverText}${ratingText}`;
  }

  const sizeText =
    book.fileSizeMb !== undefined
      ? `, ${book.fileSizeMb} МБ`
      : "";

  return `${book.title} — электронная, ${book.fileType}${sizeText}${ratingText}`;
}