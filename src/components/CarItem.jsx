import { useDispatch } from "react-redux";
import { removeCar } from "../feature/car/carsSlice";
import Btn from "./Btn";

export default function CardItem({ car, index }) {
  const dispatch = useDispatch();

  const deleteBtn = (car) => {
    dispatch(removeCar(car));
  };
  return (
    <li className="border-2 border-black px-3  flex justify-between items-center py-2 my-2">
      <h2 className="text-xl font-medium">
        {car.name} - ${car.cost}
      </h2>
      <Btn onclick={() => deleteBtn(car.id)}>Delete</Btn>
    </li>
  );
}
