import Expenses from "./components/Expenses";
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
     
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
