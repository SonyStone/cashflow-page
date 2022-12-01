import type { Component } from "solid-js";

const titleText =
  "flex place-content-center place-items-center text-lg bg-black text-white font-bold font-italic px-8 py-2";

const TitleText = (props: { children?: any }) => (
  <div class={titleText}>
    <p class="m-0">{props.children}</p>
  </div>
);

const Input = (props: { lebel: string; class?: string }) => (
  <div class={["flex border-b", props.class].join(" ")}>
    <TitleText>{props.lebel}</TitleText>
    <input class="border-0 text-base px-8 w-full text-center" />
  </div>
);

const TableRow = (props: { children?: any }) => (
  <tr>
    <td class="border-b w-1/2 white-space-wrap">{props.children}</td>
    <td class="border-b w-1/2">
      <div class="flex">
        <input
          class="grow-1 w-0 border-0 text-center text-base bg-transparent"
          type="number"
          size="0"
        />
      </div>
    </td>
  </tr>
);

const App: Component = () => {
  return (
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap gap-y-4">
        <Input class="flex-grow-1 basis-96" lebel="Профессия"></Input>
        <Input class="flex-grow-1 basis-96" lebel="Игрок"></Input>
      </div>
      <p>
        Цель: выйти из «Крысиных Гонок» на «Быстрый Путь», создать свой
        Пассивный Доход, чтобы он стал большим чем ваши Общие Расходы
      </p>

      <div class="flex flex-wrap gap-4 ">
        <div class="flex flex-grow-1 basis-96 flex-col border-2">
          <TitleText>Доходы</TitleText>
          <table class="table-fixed border-spacing-x-4 border-spacing-y-2 pb-4">
            <thead>
              <tr>
                <th class="border-b bold text-lg w-2/3 p-0">Описание</th>
                <th class="border-b bold text-lg w-1/3 p-0">Доход</th>
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

        <div class="flex flex-grow-1 basis-96 flex-col">
          <Input lebel="Аудитор"></Input>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 ">
        <div class="flex flex-grow-1 basis-96 flex-col border-2">
          <TitleText>Расходы</TitleText>
          <table class="table-fixed border-spacing-x-0 border-spacing-y-2 px-4 pb-4">
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

        <div class="flex flex-grow-1 basis-96 flex-col"></div>
      </div>

      <div class="text-2xl font-bold flex place-content-end">
        Ежемесячный Доход:
        <input />
      </div>

      <h2 class="text-center">Балансовый отчет</h2>

      <div class="flex flex-wrap border-2">
        <div class="flex flex-grow-1 basis-96 flex-col ">
          <TitleText>Активы</TitleText>
          <table class="table-fixed border-spacing-x-0 border-spacing-y-2 w-full pb-4 px-4">
            <tbody>
              <TableRow>Сбережения:</TableRow>
            </tbody>
          </table>
        </div>
        <div class="flex flex-grow-1 basis-96 flex-col">
          <TitleText>Пассивы</TitleText>
          <table class="table-fixed border-spacing-x-0 border-spacing-y-2 w-full pb-4 px-4">
            <tbody>
              <TableRow>Ипотека:</TableRow>
              <TableRow>Кредит на образование:</TableRow>
              <TableRow>Кредит на автомобиль:</TableRow>
              <TableRow>Долг по кредитным карточкам:</TableRow>
              <TableRow>Розничный долг (мелкие кредиты):</TableRow>
              <TableRow>Пассивы (бизнес):</TableRow>
              <TableRow>Кредит банка:</TableRow>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-center">Понравилась игра? Слышь, купи!</h2>
    </div>
  );
};

export default App;
