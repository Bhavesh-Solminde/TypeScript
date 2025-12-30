import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="name">Enter which chai you want</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label htmlFor="cups">Enter number of cups you want</label>
        <input
          type="number"
          id="cups"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCups(Number(e.target.value));
          }}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
