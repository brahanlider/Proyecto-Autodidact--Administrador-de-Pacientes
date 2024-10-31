import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export const usePatient = () => {
  const context = useContext(PatientContext);
  return context;
};
