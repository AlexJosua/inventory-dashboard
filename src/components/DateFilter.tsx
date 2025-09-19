import { useFilter } from "../context/FilterContext";

function DateFilter() {
  const { year, setYear } = useFilter();

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Pilih Tahun: </label>
      <select
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        style={{ padding: "5px", marginLeft: "10px" }}
      >
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
      </select>
    </div>
  );
}

export default DateFilter;
