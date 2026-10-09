import styled from "@emotion/styled";
import { type ReactNode } from "react";

interface ButtonProps {
  size: "small" | "large";
  children: ReactNode;
}

const DemoBlock = styled.section`
  margin-top: 24px;
  padding: 20px;

  background: linear-gradient(
    135deg,
    #d8c4ff,
    #b99bea
  );

  border: 1px solid #9d7bd0;
  border-radius: 18px;

  box-shadow: 0 10px 24px
    rgba(91, 59, 140, 0.18);
`;

const DemoTitle = styled.h2`
  margin: 0 0 16px;

  font-size: 22px;
  font-weight: 700;

  color: #4f2f79;
`;

const StyledButton = styled.button<ButtonProps>`
  color: #ffffff;

  background-color: #7b4db3;

  border: none;
  border-radius: 12px;

  cursor: pointer;
  font-weight: 600;

  padding: ${({ size }) =>
    size === "small"
      ? "7px 14px"
      : "12px 24px"};

  font-size: ${({ size }) =>
    size === "small"
      ? "14px"
      : "18px"};

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

function Button({
  size,
  children,
}: ButtonProps) {
  return (
    <StyledButton size={size}>
      {children}
    </StyledButton>
  );
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export default function StyledButtonDemo() {
  return (
    <DemoBlock>
      <DemoTitle>
        Демонстрация styled-компонента
      </DemoTitle>

      <Buttons>
        <Button size="small">
          Предложения
        </Button>

        <Button size="large">
          Добавить книгу
        </Button>
      </Buttons>
    </DemoBlock>
  );
}