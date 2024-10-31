import { useEffect, useState } from "react"
import DatePicker from "react-date-picker"
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { Value, DraftPatient } from "../types";
import ErrorMessage from "./ErrorMessage";
import { usePatient } from "../hooks/usePatient";

// import { usePatient } from "../hooks/usePatient"

export default function PatientForm() {

  const [patient, setPatient] = useState<DraftPatient>({
    patientName: "",
    caretaker: "",
    email: "",
    date: new Date(),
    symptoms: ""
  })

  const [error, setError] = useState("")

  const { dispatch, state } = usePatient()

  //Despues de obtener el id =boton editar
  //efecto para editar 
  useEffect(() => {
    if (state.editingId) {
      const editingPatient = state.patients.filter(currentPatient => currentPatient.id === state.editingId)[0]
      setPatient(editingPatient)
    }
  }, [state.editingId])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value)

    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeDate = (value: Value | null) => {
    setPatient({
      ...patient,
      date: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validacion
    if (Object.values(patient).includes("")) {
      setError("Todos los campos son obligatorios")
      return
    }

    if (state.editingId) {
      dispatch({ type: "update-patient", payload: { patient: { id: state.editingId, ...patient } } })
    } else {
      dispatch({ type: "add-patient", payload: { patient } })
    }

    setPatient({
      patientName: "",
      caretaker: "",
      email: "",
      date: new Date(),
      symptoms: ""
    })
  }

  return (
    <>
      <h2 className="text-center font-bold text-3xl text-gray-800">Seguimiento Pacientes</h2>
      <h3 className="text-center font-semibold text-2xl text-gray-600">Añadir Pacientes y <span className="text-violet-600">Administrarlos</span></h3>

      <form onSubmit={handleSubmit}
        action=""
        className="bg-white rounded-lg shadow-md p-6 md:max-w-screen-md mx-auto grid grid-cols-1 gap-5"
      >

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <label
          htmlFor="patientName"
          className="text-2xl text-gray-800">
          Paciente:
        </label>
        <input
          type="text"
          id="patientName"
          className="w-full border border-gray-200 rounded-lg bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-violet-500 p-2"
          placeholder="Nombre del name"
          name="patientName"
          value={patient.patientName}
          onChange={handleChange}
        />

        <label
          htmlFor="caretaker"
          className="text-2xl text-gray-800">
          Propietario:
        </label>
        <input
          type="text"
          id="caretaker"
          className="w-full border border-gray-200 rounded-lg bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-violet-500 p-2"
          placeholder="Nombre del apoderado"
          name="caretaker"
          value={patient.caretaker}
          onChange={handleChange}
        />

        <label
          htmlFor="email"
          className="text-2xl text-gray-800">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-200 rounded-lg bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-violet-500 p-2"
          placeholder="Email de registro"
          name="email"
          value={patient.email}
          onChange={handleChange}
        />

        <label
          htmlFor="date"
          className="text-2xl text-gray-800">
          Fecha:
        </label>
        <DatePicker
          className="w-full border border-gray-200 rounded-lg bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-violet-500 p-2"
          value={patient.date}
          onChange={handleChangeDate}

        />

        <label
          htmlFor="symptoms"
          className="text-2xl text-gray-800">
          Síntomas:
        </label>
        <textarea
          id="symptoms"
          className="w-full border border-gray-200 rounded-lg bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-violet-500 p-2"
          placeholder="Nombre del symptoms"
          name="symptoms"
          value={patient.symptoms}
          onChange={handleChange}
        />

        <input
          type="submit"
          className="w-full bg-violet-600 text-white font-semibold rounded-lg p-2 hover:bg-violet-700 transition duration-200"
          value={state.editingId ? "Guardar Cambios" : "Registrar Paciente Nuevo"}
          // value="Registrar Paciente Nuevo"
        />
      </form>
    </>
  )
}
