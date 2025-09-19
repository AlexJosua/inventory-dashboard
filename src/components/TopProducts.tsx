import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { topProducts } from "../data/dummyData";
import { useFilter } from "../context/FilterContext";

function TopProducts() {
  const { year } = useFilter();
  const filteredData = topProducts.filter((p) => p.year === year);

  return (
    <div>
      <h2>🏆 10 Produk Terlaris ({year})</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <table
        style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Produk</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Nilai Penjualan
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((p, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {p.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Rp {p.sales.toLocaleString("id-ID")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopProducts;
