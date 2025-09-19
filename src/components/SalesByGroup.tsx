import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesByGroup } from "../data/dummyData";
import { useFilter } from "../context/FilterContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function SalesByGroup() {
  const { year } = useFilter();
  const filteredData = salesByGroup.filter((d) => d.year === year);

  return (
    <div>
      <h2>📊 Penjualan Per Group Barang ({year})</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={filteredData}
            dataKey="sales"
            nameKey="group"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {filteredData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesByGroup;
