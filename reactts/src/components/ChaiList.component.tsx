import type { Chai } from "../types.ts";
import ChaiCard from "./ChaiCard.component.tsx";
interface ChaiListProps {
  items: Chai[];
}

const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((item) => (
        <ChaiCard
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 20}
        />
      ))}
    </div>
  );
};

export default ChaiList;
