function DateInputs() {
  let inputStyling = "border rounded-md px-1";
  let inputWrapper = "flex justify-between gap-2";

  return (
    <div className="date-filters w-2/4 flex flex-col md:flex-row justify-around align-middle gap-4 md:px-4">
      <div className={inputWrapper}>
        <label className="md:w-[unset] w-[2rem]">From</label>
        <input type="date" className={inputStyling} />
      </div>
      <div className={inputWrapper}>
        <label className="md:w-[unset] w-[2.2rem]">To</label>
        <input type="date" className={inputStyling} />
      </div>
    </div>
  );
}

export default DateInputs;
