import { useSelector } from "react-redux";
import CarItem from "./CarItem";

export default function CarList() {
  const carList = useSelector(({ cars: { data, searchItem } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  });

  return (
    <ul className="w-full flex-gap-2">
      {carList.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
}
