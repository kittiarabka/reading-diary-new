import styled from "@emotion/styled";

const DemoBlock = styled.section`
  margin-top: 24px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #d9c4f4,
    #c2a4eb
  );
  border: 1px solid #a77ad8;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(91, 59, 140, 0.18);
`;

const DemoTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 700;
  color: #4f2f79;
`;

const AddButton = styled.button`
  padding: 12px 22px;
  color: #ffffff;
  background-color: #7b4db3;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #5e348f;
  }

  &:active {
    transform: scale(0.97);
    background-color: #4b2777;
  }

  &:focus-visible {
    outline: 3px solid #c9a7f2;
    outline-offset: 3px;
  }
`;

export default function StyledButtonDemo() {
  return (
    <DemoBlock>
      <DemoTitle>
        Демонстрация styled-компонента
      </DemoTitle>

      <AddButton type="button">
        Добавить книгу
      </AddButton>
    </DemoBlock>
  );
}