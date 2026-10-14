import { type Book } from "../../types/book";
import BookCard from "../BookCard/BookCard";

import styled from "@emotion/styled";

interface BookListProps {
  books: Book[];
  deleteBook: (id: number) => void;
}

const Section = styled.section`
  padding: 24px;

  background-color: rgba(
    248,
    245,
    255,
    0.9
  );

  border: 1px solid #d8c8f0;
  border-radius: 18px;

  box-shadow: 0 12px 32px
    rgba(84, 63, 120, 0.12);
`;

const SectionTitle = styled.h2`
  margin: 0 0 20px;

  font-size: 26px;
  font-weight: 600;

  color: #5f4388;

  text-align: left;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmptyText = styled.p`
  margin: 0;

  font-size: 18px;

  color: #756f68;
`;

export default function BookList({
  books,
  deleteBook,
}: BookListProps) {
  return (
    <Section>
      <SectionTitle>
        Мои книги
      </SectionTitle>

      {books.length === 0 ? (
        <EmptyText>
          Книг пока нет.
        </EmptyText>
      ) : (
        <List>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              deleteBook={deleteBook}
            />
          ))}
        </List>
      )}
    </Section>
  );
}