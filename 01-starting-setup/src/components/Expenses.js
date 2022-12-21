import { React, useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const newSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => String(expense.date.getFullYear()) === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onNewSelection={newSelectionHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
