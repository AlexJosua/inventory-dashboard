import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { salesData } from "../data/dummyData";
import { useFilter } from "../context/FilterContext";

function SalesChart() {
  const { year } = useFilter();
  const filteredData = salesData.filter((d) => d.year === year);

  return (
    <div>
      <h2>📈 Penjualan Per Bulan ({year})</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
