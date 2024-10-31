import { useMemo } from "react"
import { usePatient } from "../hooks/usePatient"
import PatientDetail from "./PatientDetail"

export default function PatientList() {

  const { state } = usePatient()

  const isEmpty = useMemo(() => state.patients.length === 0, [state.patients])

  return (
    <>

      <h3 className="text-center font-semibold text-2xl text-gray-800">
        {isEmpty ? "No hay pacientes" : "Listado de pacientes"}
      </h3>

      <h2 className="text-center font-semibold text-2xl text-gray-800">
        {isEmpty ? "Comienza agregando pacientes " : "Administra tus "}
        <span className="text-violet-600">
          {isEmpty ? "y aparecerán en este lugar" : "Pacientes y citas"}
        </span>
      </h2>

      {state.patients.map(patient =>
        <PatientDetail
          key={patient.id}
          patient={patient}
        />
      )}




    </>
  )
}
