import ExpenseItem from "./components/ExpenseItem";
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>Let's get started!</div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
