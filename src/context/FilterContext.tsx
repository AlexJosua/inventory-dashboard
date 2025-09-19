import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type FilterContextType = {
  year: number;
  setYear: (year: number) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [year, setYear] = useState(2025); // default tahun

  return (
    <FilterContext.Provider value={{ year, setYear }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return context;
}
