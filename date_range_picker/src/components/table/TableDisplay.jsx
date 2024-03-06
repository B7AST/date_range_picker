import React from "react";
import JsonData from "../../api/timeseries.json";

function TableDisplay() {

  const displayData = JsonData.map((info, index) => {
    return (
      <tr key={index} className="text-center even:bg-yellow-100 hover:bg-yellow-300">
        <td className="w-[1rem]">{index}</td>
        <td>{info.DateTime}</td>
        <td>{info.ENTSOE_DE_DAM_Price}</td>
        <td>{info.ENTSOE_GR_DAM_Price}</td>
        <td>{info.ENTSOE_FR_DAM_Price}</td>
      </tr>
    );
  });

  return (
    <div className="search-result">
      <table className="w-full table-auto border-separate">
        <thead className="bg-yellow-400">
          <tr>
            <th>#</th>
            <th>Date Time</th>
            <th>De Price</th>
            <th>Gr Price</th>
            <th>Fr Price</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
