import CarList from "./components/CarList";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Search from "./components/Search";

function App() {
  return (
    <div className="App max-w-screen-md absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
      <div className="w-[520px] flex items-end flex-col justify-stretch">
        <Form />
        <Search />
        <CarList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
