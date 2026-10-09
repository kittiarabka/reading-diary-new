import {
  type Book,
  type BookStatus,
} from "../../types/book";

import styled from "@emotion/styled";

interface BookCardProps {
  book: Book;
}

interface StatusStyleProps {
  status: BookStatus;
}

interface CoverTitleStyleProps {
  length: number;
}

const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 16px;

  background: linear-gradient(
    135deg,
    #f7f2ff,
    #eee3ff
  );

  border: 1px solid #d7c0f3;
  border-radius: 16px;

  box-shadow: 0 8px 20px
    rgba(110, 75, 160, 0.12);
`;

const Cover = styled.div<StatusStyleProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 122px;

  padding: 10px;

  color: #ffffff;

  border-radius: 8px;

  box-shadow: 0 8px 18px
    rgba(88, 58, 138, 0.2);

  background: ${({ status }) => {
    if (status === "done") {
      return "linear-gradient(135deg, #b69af0, #6f42c1)";
    }

    if (status === "reading") {
      return "linear-gradient(135deg, #cbb7f0, #8b5fd0)";
    }

    return "linear-gradient(135deg, #dcc9f5, #aa78d4)";
  }};
`;

const CoverTitle =
  styled.span<CoverTitleStyleProps>`
    font-weight: 600;
    line-height: 1.15;
    text-align: center;
    word-break: break-word;

    font-size: ${({ length }) => {
      if (length > 40) {
        return "8px";
      }

      if (length > 28) {
        return "10px";
      }

      if (length > 16) {
        return "12px";
      }

      return "16px";
    }};
  `;

const Title = styled.h3`
  margin: 8px 0;

  font-size: 24px;
  font-weight: 600;

  color: #4f3473;
`;

const Author = styled.p`
  margin: 0 0 12px;

  font-size: 18px;

  color: #8263a8;
`;

const Badge = styled.span<StatusStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  width: fit-content;

  padding: 5px 12px;

  font-size: 15px;

  border-radius: 999px;

  color: ${({ status }) => {
    if (status === "done") {
      return "#5f3b8f";
    }

    if (status === "reading") {
      return "#6f4aa0";
    }

    return "#7c5a92";
  }};

  background-color: ${({ status }) => {
    if (status === "done") {
      return "#e6dcf7";
    }

    if (status === "reading") {
      return "#eee4fb";
    }

    return "#f1e9f7";
  }};

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background-color: ${({ status }) => {
      if (status === "done") {
        return "#7d57bd";
      }

      if (status === "reading") {
        return "#976fd1";
      }

      return "#b18ac8";
    }};
  }
`;

const Info = styled.p`
  margin: 12px 0 0;

  font-size: 17px;

  color: #745f87;
`;

const Stars = styled.span`
  color: #976fd1;

  letter-spacing: 1px;
`;

const DeleteButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  margin-left: auto;

  padding: 0;

  font-size: 18px;

  background-color: #faf7ff;

  border: 1px solid #d2c0ec;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #eee4fb;
  }

  &:active {
    background-color: #e2d4f3;
  }

  &:focus-visible {
    outline: 2px solid #976fd1;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const statusText = {
  want: "Хочу прочитать",
  reading: "Читаю",
  done: "Прочитано",
};

export default function BookCard({
  book,
}: BookCardProps) {
  const rating = book.rating || 0;
  const stars = "★".repeat(rating);

  return (
    <Card>
      <Cover status={book.status}>
        <CoverTitle
          length={book.title.length}
        >
          {book.title}
        </CoverTitle>
      </Cover>

      <div>
        <Title>
          {book.title}
        </Title>

        <Author>
          {book.author}
        </Author>

        <Badge status={book.status}>
          {statusText[book.status]}
        </Badge>

        {book.status === "done" ? (
          <>
            <Info>
              Оценка:{" "}
              <Stars>{stars}</Stars>{" "}
              {rating}/5
            </Info>

            {book.note && (
              <Info>
                Заметка: {book.note}
              </Info>
            )}
          </>
        ) : (
          <Info>
            Оценка будет доступна
            после прочтения
          </Info>
        )}
      </div>

      <DeleteButton
        type="button"
        aria-label="Удалить книгу"
      >
        🗑️
      </DeleteButton>
    </Card>
  );
}