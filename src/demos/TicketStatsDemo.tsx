import styled from "@emotion/styled";

type TicketStatus =
  | "new"
  | "in-progress"
  | "closed";

interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  isUrgent: boolean;
}

interface TicketStatsProps {
  total: number;
  active: number;
  closed: number;
  urgent: number;
}

const tickets: Ticket[] = [
  {
    id: 1,
    title: "Не загружается файл",
    status: "closed",
    isUrgent: false,
  },
  {
    id: 2,
    title: "Не приходит письмо",
    status: "in-progress",
    isUrgent: true,
  },
  {
    id: 3,
    title: "Ошибка при оплате",
    status: "new",
    isUrgent: true,
  },
  {
    id: 4,
    title: "Не открывается профиль",
    status: "new",
    isUrgent: false,
  },
];

const DemoSection = styled.section`
  margin-top: 28px;
  padding: 24px;

  background: linear-gradient(
    135deg,
    #f8f3ff,
    #eee4fb
  );

  border: 1px solid #d7c0f3;
  border-radius: 18px;
`;

const DemoTitle = styled.h2`
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

function TicketStats({
  total,
  active,
  closed,
  urgent,
}: TicketStatsProps) {
  return (
    <StatsRow>
      <StatCard>
        <span>Всего</span>
        <strong>{total}</strong>
      </StatCard>

      <StatCard>
        <span>Активные</span>
        <strong>{active}</strong>
      </StatCard>

      <StatCard>
        <span>Закрытые</span>
        <strong>{closed}</strong>
      </StatCard>

      <StatCard>
        <span>Срочные</span>
        <strong>{urgent}</strong>
      </StatCard>
    </StatsRow>
  );
}

export function TicketStatsDemo() {
  const total = tickets.length;

  const active = tickets.filter(
    (ticket) =>
      ticket.status !== "closed",
  ).length;

  const closed = tickets.filter(
    (ticket) =>
      ticket.status === "closed",
  ).length;

  const urgent = tickets.filter(
    (ticket) => ticket.isUrgent,
  ).length;

  return (
    <DemoSection>
      <DemoTitle>
        Статистика обращений
      </DemoTitle>

      <TicketStats
        total={total}
        active={active}
        closed={closed}
        urgent={urgent}
      />
    </DemoSection>
  );
}