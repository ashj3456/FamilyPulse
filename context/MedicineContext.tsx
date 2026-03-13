import React, { createContext, useContext, useState } from "react";

const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines((prev) => [...prev, medicine]);
  };

  const toggleMedicineStatus = (id) => {
    setMedicines((prev) =>
      prev.map((med) =>
        med.id === id ? { ...med, active: !med.active } : med,
      ),
    );
  };

  return (
    <MedicineContext.Provider
      value={{ medicines, addMedicine, toggleMedicineStatus }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicines = () => useContext(MedicineContext);
