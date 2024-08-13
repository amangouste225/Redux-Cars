export default function Btn({ children, onclick }) {
  return (
    <button
      onClick={onclick}
      className="border-2 px-5 py-1 rounded-md border-black hover:bg-black hover:text-white"
    >
      {children}
    </button>
  );
}
