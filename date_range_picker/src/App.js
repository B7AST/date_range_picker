import { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import LineChart from "./components/chart/LineChart.jsx";
import TableDisplay from "./components/table/TableDisplay.jsx";
import getData from "./api/index.jsx";
import './App.css';

function App() {
  const [filters, setFilters] = useState({ dateFrom: "", dateTo: "" });
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = getData(filters)
    setData(result)

  }, [filters]);

  return (
    <div className="w-full h-screen">
      <Header filters={filters} setFilters={setFilters} />
      <LineChart data={data} />
      <TableDisplay data={data} />
    </div>
  );
}

export default App;
