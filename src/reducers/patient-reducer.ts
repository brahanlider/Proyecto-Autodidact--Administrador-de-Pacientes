import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

export type PatientAction =
  | { type: "add-patient"; payload: { patient: DraftPatient } }
  | { type: "remove-patient"; payload: { id: Patient["id"] } }
  | { type: "get-patient-by-id"; payload: { id: Patient["id"] } } // Obtener
  | { type: "update-patient"; payload: { patient: Patient } }; // Obtener

export type PatientState = {
  patients: Patient[];
  editingId: Patient["id"];
};

export const initialState: PatientState = {
  patients: [],
  editingId: "",
};

// * :---INFO: Generar un ID único para el gasto
const createPatient = (draftPatient: DraftPatient): Patient => {
  return {
    ...draftPatient,
    id: uuidv4(),
  };
};

export const patientReducer = (
  state: PatientState = initialState,
  action: PatientAction
) => {
  //
  if (action.type === "add-patient") {
    const patient = createPatient(action.payload.patient);

    return {
      ...state,
      patients: [...state.patients, patient],
    };
  }

  if (action.type === "remove-patient") {
    return {
      ...state,
      patients: state.patients.filter(
        (patient) => patient.id !== action.payload.id
      ),
    };
  }

  if (action.type === "get-patient-by-id") {
    return {
      ...state,
      editingId: action.payload.id,
    };
  }

  if (action.type === "update-patient") {
    return {
      ...state,
      patients: state.patients.map((patient) =>
        patient.id === action.payload.patient.id
          ? action.payload.patient
          : patient
      ),
      editingId: "",
    };
  }

  return state;
};
