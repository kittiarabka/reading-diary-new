import { type Book } from "../types/book";

export const initialBooks: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "Джордж Оруэлл",
    status: "done",
    rating: 5,
    note: "Сильная антиутопия.",
  },
  {
    id: 2,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    status: "reading",
  },
  {
    id: 3,
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    status: "want",
  },
];