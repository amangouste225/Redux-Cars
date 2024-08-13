import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../feature/car/carsSlice";

export default function Search() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cars.searchItem);

  const handleSearch = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="flex justify-between w-full my-5">
      <h2 className="font-bold text-xl">My Cars</h2>
      <div className="flex gap-2 items-center text-xl">
        <label htmlFor="search">Search</label>
        <input
          value={item}
          onChange={handleSearch}
          type="text"
          className="border-black border-2 py-1 px-2"
        />
      </div>
    </div>
  );
}
