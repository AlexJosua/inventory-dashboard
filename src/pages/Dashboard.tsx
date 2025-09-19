import DateFilter from "../components/DateFilter";
import SalesByGroup from "../components/SalesByGroup";
import SalesChart from "../components/SalesChart";
import TopProducts from "../components/TopProducts";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Dashboard Inventory</h1>
      <DateFilter />
      <SalesChart />
      <SalesByGroup />
      <TopProducts />
    </div>
  );
}

export default Dashboard;
