import DateInputs from "./DateInputs.jsx";

//this Header component represents the header section of a web page.
// It includes a logo and a date range picker component (DateInputs) for filtering data based on a specified date range.
// The header is styled using Tailwind CSS utility classes for layout and appearance.
function Header({filters, setFilters}) {
  return (
    <div className="header w-full bg-yellow-300">
      <header className="flex flex-col md:flex-row justify-between align-middle px-4 py-4 gap-4">
        <div className="logo w-2/4 text-lg font-bold">Date Range Picker</div>
        <DateInputs filters={filters} setFilters={setFilters} />
      </header>
    </div>
  );
}

export default Header;
