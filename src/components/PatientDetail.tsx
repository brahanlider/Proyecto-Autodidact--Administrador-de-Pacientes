import { formatDate } from "../helpers"
import { usePatient } from "../hooks/usePatient"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailProps = {
  patient: Patient
}

export default function PatientDetail({ patient }: PatientDetailProps) {

  const { dispatch } = usePatient()

  return (
    <div className="mx-5 my-10 px-5 py-5 bg-white shadow-md rounded-xl">
      <PatientDetailItem
        label="Id: "
        input={patient.id}
      />
      <PatientDetailItem
        label="Nombre: "
        input={patient.patientName}
      />
      <PatientDetailItem
        label="Propietario: "
        input={patient.caretaker}
      />
      <PatientDetailItem
        label="Email: "
        input={patient.email}
      />
      <PatientDetailItem
        label="Fecha alta: "
        input={formatDate(patient.date!.toString())}
      />
      <PatientDetailItem
        label="Síntomas: "
        input={patient.symptoms}
      />

      <div className="flex justify-between">
        <button className="px-5 py-2 bg-red-600 rounded-lg"
          onClick={() => dispatch({ type: "get-patient-by-id", payload: { id: patient.id } })}>
          Editar
        </button>

        <button className="px-5 py-2 bg-blue-600 rounded-lg"
          onClick={() => dispatch({ type: "remove-patient", payload: { id: patient.id } })}
        >
          Eliminar
        </button>
      </div>

    </div>

  )
}
{/* <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
        <span className="font-normal normal-case">{data}</span>
    </p> */}