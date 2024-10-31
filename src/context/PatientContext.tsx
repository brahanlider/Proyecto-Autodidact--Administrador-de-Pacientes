import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { initialState, PatientAction, patientReducer, PatientState } from "../reducers/patient-reducer";

type PatientContextProps = {
  state: PatientState
  dispatch: Dispatch<PatientAction>
}

type PatientProviderProps = {
  children: ReactNode
}

export const PatientContext = createContext<PatientContextProps>({} as PatientContextProps)

export const PatientProvider = ({ children }: PatientProviderProps) => {

  const [state, dispatch] = useReducer(patientReducer, initialState)

  return (
    <PatientContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </PatientContext.Provider>
  )
}