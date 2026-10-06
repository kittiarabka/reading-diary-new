import { practiceBooks } from "./data";
import formatBookInfo from "./formatBookInfo";

practiceBooks.forEach((book) => {
  console.log(formatBookInfo(book));
});