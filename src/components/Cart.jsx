import { useSelector } from "react-redux";

export default function Cart() {
  const total = useSelector(({ cars: { data, searchItem } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchItem.toLowerCase())
      )
      .reduce((a, b) => a + b.cost, 0);
  });

  return <h1 className="font-bold text-xl mt-10">Total Value : ${total}</h1>;
}
