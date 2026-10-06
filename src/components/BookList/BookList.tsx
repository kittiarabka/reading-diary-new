import { type Book } from "../../types/book";
import BookCard from "../BookCard/BookCard";
import styled from "@emotion/styled";

interface BookListProps {
  books: Book[];
}

const Section = styled.section`
  padding: 24px;
  background-color: rgba(252, 250, 255, 0.9);
  border: 1px solid #ddd0f0;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(84, 63, 120, 0.12);
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 20px;
  font-size: 26px;
  font-weight: 600;
  color: #5f4388;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function BookList({
  books,
}: BookListProps) {
  return (
    <Section>
      <SectionTitle>Мои книги</SectionTitle>

      <List>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </List>
    </Section>
  );
}