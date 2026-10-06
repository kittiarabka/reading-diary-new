import { type Book } from "../../types/book";
import styled from "@emotion/styled";

interface BookCardProps {
  book: Book;
}

const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 18px;
  background: linear-gradient(
    135deg,
    #f6f0ff,
    #eadcff
  );
  border: 1px solid #c7a9ea;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(91, 59, 140, 0.12);
`;

const Cover = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 122px;
  padding: 10px;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    #b995e5,
    #7446ad
  );
  border-radius: 8px;
  box-shadow: 0 8px 18px rgba(83, 53, 126, 0.25);
`;

const CoverTitle = styled.span`
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
`;

const Title = styled.h3`
  margin: 8px 0;
  font-size: 24px;
  font-weight: 700;
  color: #3f2364;
`;

const Author = styled.p`
  margin: 0 0 12px;
  font-size: 18px;
  color: #76559d;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  padding: 6px 13px;
  font-size: 15px;
  color: #ffffff;
  background-color: #8a5bc1;
  border-radius: 999px;
`;

const Info = styled.p`
  margin: 12px 0 0;
  font-size: 17px;
  color: #654c81;
`;

const Stars = styled.span`
  color: #9f6ed5;
  letter-spacing: 1px;
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
      <Cover>
        <CoverTitle>{book.title}</CoverTitle>
      </Cover>

      <div>
        <Title>{book.title}</Title>

        <Author>{book.author}</Author>

        <Badge>{statusText[book.status]}</Badge>

        {book.status === "done" ? (
          <>
            <Info>
              Оценка: <Stars>{stars}</Stars> {rating}/5
            </Info>

            {book.note && (
              <Info>
                Заметка: {book.note}
              </Info>
            )}
          </>
        ) : (
          <Info>
            Оценка будет доступна после прочтения
          </Info>
        )}
      </div>
    </Card>
  );
}