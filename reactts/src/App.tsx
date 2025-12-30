import ChaiCard from "./components/ChaiCard.component.tsx";
import "./App.css";
import Counter from "./components/Counter.component.tsx";
import ChaiList from "./components/ChaiList.component.tsx";
import type { Chai } from "./types.ts";
import OrderForm from "./components/OrderForm.tsx";
function App() {
  const menu: Chai[] = [
    { id: "1s", name: "Masala", price: 20 },
    { id: "2s", name: "Ginger", price: 30 },
    { id: "3s", name: "Lemon", price: 40 },
  ];

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      <ChaiCard name="iPhone" price={80000} />
      <ChaiCard name="iPhone pro max" price={150000} />
      <Counter />
      <ChaiList items={menu} />
      <OrderForm
        onSubmit={(order: { name: "Masala"; cups: 2 }) => {
          console.log("Placed", order.name, order.cups);
        }}
      />
    </>
  );
}

export default App;
