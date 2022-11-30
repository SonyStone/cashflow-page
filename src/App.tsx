import type { Component } from "solid-js";

const TitleText = (props: { children?: any }) => (
  <div class="flex place-content-center place-items-center text-lg bg-black text-white font-bold font-italic px-8 py-2">
    <p class="m-0">{props.children}</p>
  </div>
);

const Input = (props: { lebel: string }) => (
  <div class="flex border-b">
    <TitleText>{props.lebel}</TitleText>
    <input class="border-0 text-base px-8 w-full" />
  </div>
);

const TableRow = (props: { children?: any }) => (
  <tr>
    <td class="border-b">{props.children}</td>
    <td class="border-b">
      <div class="flex">
        <input class="grow-1 px-4 border-0 text-center" type="number" />
      </div>
    </td>
  </tr>
);

const App: Component = () => {
  return (
    <>
      <div class="flex">
        <Input lebel="Профессия"></Input>
        <Input lebel="Игрок"></Input>
      </div>
      <p>
        Цель: выйти из «Крысиных Гонок» на «Быстрый Путь», создать свой
        Пассивный Доход, чтобы он стал большим чем ваши Общие Расходы
      </p>

      <div class="flex flex-col border-2">
        <TitleText>Доходы</TitleText>
        <table class="border-spacing-x-4 border-spacing-y-2 py-4">
          <thead>
            <tr>
              <th class="border-b bold text-lg">Описание</th>
              <th class="border-b bold text-lg">Доход</th>
            </tr>
          </thead>
          <tbody>
            <TableRow>Заработок:</TableRow>
            <TableRow>Капиталовложения (проценты):</TableRow>
            <TableRow>Дивиденты:</TableRow>
            <TableRow>Недвижимость:</TableRow>
            <TableRow>Бизнес:</TableRow>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col border-2">
        <TitleText>Расходы</TitleText>
        <table class="border-spacing-x-0 border-spacing-y-2 p-4">
          <tbody>
            <TableRow>Налоги:</TableRow>
            <TableRow>Оплата ипотеки:</TableRow>
            <TableRow>Оплата кредитана на образование:</TableRow>
            <TableRow>Оплата кредитана на автомобиль:</TableRow>
            <TableRow>Выплаты по кредитной карточке:</TableRow>
            <TableRow>Различные расходы (мелкие кредиты):</TableRow>
            <TableRow>Другие расходы:</TableRow>
            <TableRow>Расходы на детей:</TableRow>
            <TableRow>Оплата кредита банка:</TableRow>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
