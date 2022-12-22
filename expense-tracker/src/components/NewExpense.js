import { React, useState } from "react";

import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [formShow, setFormShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormShow(false);
  };
  const startEditingHandler = () => {
    setFormShow(true);
  };
  const stopEditingHandler = () => {
    setFormShow(false);
  };
  return (
    <div className="new-expense">
      {!formShow && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {formShow && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
