import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Shirt",
      amount: 45.15,
      date: new Date(2022, 5, 10),
    },
    {
      id: "e2",
      title: "Rice",
      amount: 5.25,
      date: new Date(2022, 3, 6),
    },

    {
      id: "e3",
      title: "Playstation 5",
      amount: 455.15,
      date: new Date(2022, 3, 10),
    },

    {
      id: "e4",
      title: "Sony TV",
      amount: 655.0,
      date: new Date(2022, 3, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
    <Expenses items = {expenses} />
    </div>
  );
}

export default App;
