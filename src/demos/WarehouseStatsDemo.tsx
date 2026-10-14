import styled from "@emotion/styled";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface WarehouseStatsProps {
  total: number;
  available: number;
  outOfStock: number;
  lowStock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ноутбуки",
    quantity: 8,
  },
  {
    id: 2,
    name: "Клавиатуры",
    quantity: 4,
  },
  {
    id: 3,
    name: "Мыши",
    quantity: 0,
  },
  {
    id: 4,
    name: "Мониторы",
    quantity: 2,
  },
  {
    id: 5,
    name: "Наушники",
    quantity: 10,
  },
];

const DemoSection = styled.section`
  margin-top: 28px;
  padding: 24px;

  background: linear-gradient(
    135deg,
    #f7f2ff,
    #eee3ff
  );

  border: 1px solid #d7c0f3;
  border-radius: 18px;

  box-shadow: 0 10px 24px
    rgba(84, 63, 120, 0.12);
`;

const Title = styled.h2`
  margin: 0 0 18px;

  color: #5f4388;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 12px;
`;

const StatCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;

  padding: 16px;

  background-color: #f1e9f7;
  border-radius: 10px;
`;

function WarehouseStats({
  total,
  available,
  outOfStock,
  lowStock,
}: WarehouseStatsProps) {
  return (
    <StatsRow>
      <StatCard>
        <span>Всего товаров</span>
        <strong>{total}</strong>
      </StatCard>

      <StatCard>
        <span>В наличии</span>
        <strong>{available}</strong>
      </StatCard>

      <StatCard>
        <span>Закончились</span>
        <strong>{outOfStock}</strong>
      </StatCard>

      <StatCard>
        <span>Осталось мало</span>
        <strong>{lowStock}</strong>
      </StatCard>
    </StatsRow>
  );
}

export function WarehouseStatsDemo() {
  const total = products.length;

  const available = products.filter(
    (product) => product.quantity > 0,
  ).length;

  const outOfStock = products.filter(
    (product) => product.quantity === 0,
  ).length;

  const lowStock = products.filter(
    (product) =>
      product.quantity > 0 &&
      product.quantity <= 5,
  ).length;

  return (
    <DemoSection>
      <Title>
        Статистика склада
      </Title>

      <WarehouseStats
        total={total}
        available={available}
        outOfStock={outOfStock}
        lowStock={lowStock}
      />
    </DemoSection>
  );
}