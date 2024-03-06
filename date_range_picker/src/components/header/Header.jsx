import DateInputs from "./DateInputs.jsx";

function Header() {
  return (
    <div className="header w-full bg-yellow-300">
      <header className="flex flex-col md:flex-row justify-between align-middle px-4 py-4 gap-4">
        <div className="logo w-2/4 text-lg font-bold">Date Range Picker</div>
        <DateInputs />
      </header>
    </div>
  );
}

export default Header;
