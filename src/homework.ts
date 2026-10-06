//  Базовые типы

const userName: string = "Вадим";
const userAge: number = 15;
const hasAccess: boolean = true;

console.log("Имя:", userName);
console.log("Возраст:", userAge);
console.log("Доступ разрешён:", hasAccess);

// Объекты и массивы

type City = {
  name: string;
  population: number;
  isCapital: boolean;
};

const cities: City[] = [
  {
    name: "Москва",
    population: 13000000,
    isCapital: true,
  },
  {
    name: "Санкт-Петербург",
    population: 5600000,
    isCapital: false,
  },
  {
    name: "Казань",
    population: 1300000,
    isCapital: false,
  },
];

console.log("Все города:", cities);
console.log("Первый город:", cities[0].name);
console.log(
  "Население второго города:",
  cities[1].population
);

function calculateTotal(
  price: number,
  quantity: number
): number {
  return price * quantity;
}

const total = calculateTotal(750, 4);

console.log("Общая стоимость:", total);