import { type Book } from "../../types/book";

export interface PrintedBook extends Book {
  format: "paper";
  pages: number;
  coverType?: "soft" | "hard";
}

export interface ElectronicBook extends Book {
  format: "electronic";
  fileType: "pdf" | "epub";
  fileSizeMb?: number;
}

export type PracticeBook =
  | PrintedBook
  | ElectronicBook;