// this component renders two date input fields with labels for filtering data.
// It uses Tailwind CSS for styling and relies on props (filters and setFilters) to manage the state of the date filters.
function DateInputs({filters, setFilters}) {

  let inputStyling = "border rounded-md px-1";
  let inputWrapper = "flex justify-between gap-2";

  return (
    <div className="date-filters w-2/4 flex flex-col md:flex-row justify-around align-middle gap-4 md:px-4">
      <div className={inputWrapper}>
        <label className="md:w-[unset] w-[2rem]">From</label>
        <input type="date" value={filters.dateFrom} onChange={(e) => setFilters((p) => ({...p, dateFrom:e.target.value}))} className={inputStyling} />
      </div>
      <div className={inputWrapper}>
        <label className="md:w-[unset] w-[2.2rem]">To</label>
        <input type="date" value={filters.dateTo} onChange={(e) => setFilters((p) => ({...p, dateTo:e.target.value}))} className={inputStyling} />
      </div>
    </div>
  );
}

export default DateInputs;
