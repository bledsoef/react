import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 299.99, date: new Date(2021, 2, 28) },
    { title: "TV", amount: 199.99, date: new Date(2021, 2, 28) },
    { title: "Netflix", amount: 8.99, date: new Date(2021, 2, 28) },
    { title: "Hulu", amount: 6.99, date: new Date(2021, 2, 28) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
