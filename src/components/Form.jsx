import { addCar } from "../feature/car/carsSlice";
import { changeCost, changeName } from "../feature/form/formSlice";
import Btn from "./Btn";

import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
    // dispatch(changeName(""));
    // dispatch(changeCost(0));
  };

  return (
    <form
      className="flex gap-2 items-end justify-between"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Car Name</label>
        <input
          value={name}
          onChange={(e) => dispatch(changeName(e.target.value) || "")}
          className="border-black border-2 py-1 px-2"
          type="text"
          name="name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Car Value</label>
        <input
          value={cost || ""}
          onChange={(e) => dispatch(changeCost(parseInt(e.target.value) || 0))}
          className="border-black border-2 py-1 px-2"
          type="number"
        />
      </div>
      <Btn>Submit</Btn>
    </form>
  );
}
