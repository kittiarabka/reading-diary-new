import { useState } from "react";
import { type Book } from "./types/book";
import { initialBooks } from "./data/books";

import BookList from "./components/BookList/BookList";
import { Stats } from "./components/Stats/Stats";

import StyledButtonDemo from "./demos/StyledButtonDemo";
import { TicketStatsDemo } from "./demos/TicketStatsDemo";
import { WarehouseStatsDemo } from "./demos/WarehouseStatsDemo";

import styled from "@emotion/styled";

const Page = styled.div`
  min-height: 100vh;
  padding: 32px 48px;

  background: linear-gradient(
    180deg,
    #efe5ff,
    #d9c4f4
  );

  color: #2f2540;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 0 24px;

  font-size: 38px;
  font-weight: 700;

  color: #5f4388;
`;

export default function App() {
  const [books, setBooks] =
    useState<Book[]>(initialBooks);

  const deleteBook = (id: number) => {
    setBooks((currentBooks) =>
      currentBooks.filter(
        (book) => book.id !== id,
      ),
    );
  };

  return (
    <Page>
      <Container>
        <Title>
          Читательский дневник
        </Title>

        <Stats books={books} />

        <BookList
          books={books}
          deleteBook={deleteBook}
        />

        <StyledButtonDemo />

        <TicketStatsDemo />

        <WarehouseStatsDemo />
      </Container>
    </Page>
  );
}