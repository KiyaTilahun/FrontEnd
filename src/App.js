import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 297.25,
      date: new Date(2023, 1, 5),
    },
    {
      title: "Best food",
      amount: 297.25,
      date: new Date(2023, 1, 5),
    },
    {
      title: "car Insurance",
      amount: 297.25,
      date: new Date(2023, 1, 5),
    },
  ];
  function addExpenseHandler(expense){
    console.log('In app.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAdd={addExpenseHandler}/>
           <Expenses items={expenses} />
    </div>
  );
}

export default App;
