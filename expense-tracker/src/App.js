import { React, useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
const starting_expenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 299.99,
    date: new Date(2021, 2, 28),
  },
  { id: 2, title: "TV", amount: 199.99, date: new Date(2021, 2, 28) },
  { id: 3, title: "Netflix", amount: 8.99, date: new Date(2021, 2, 28) },
  { id: 4, title: "Hulu", amount: 6.99, date: new Date(2021, 2, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(starting_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={expenses}
      ></Expenses>
    </div>
  );
}

export default App;
