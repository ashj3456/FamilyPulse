import { createContext, useContext, useState } from "react";

type Medicine = {
  id: string;
  name: string;
  color: string;
  size: string;
  time: string;
  active: boolean;
};

type MedicineContextType = {
  medicines: Medicine[];
  addMedicine: (medicine: Medicine) => void;
};

const MedicineContext = createContext<MedicineContextType | undefined>(
  undefined,
);

export const MedicineProvider = ({ children }: any) => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const addMedicine = (medicine: Medicine) => {
    setMedicines((prev) => [...prev, medicine]);
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicines = () => {
  const context = useContext(MedicineContext);

  if (!context) {
    throw new Error("useMedicines must be used inside MedicineProvider");
  }

  return context;
};
