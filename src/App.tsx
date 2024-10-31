import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

  return (
    <>
      <h1 className="text-center font-bold text-4xl py-6">
        Seguimiento de Pacientes <span className="text-violet-600">Veterinaria</span>
      </h1>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-52 p-5">

        <section className="flex-1 space-y-6">

          <PatientForm />

        </section>


        <section className="bg-orange-400 flex-1 rounded-lg shadow-lg p-4">
          <PatientList />
        </section>
      </main>
    </>
  )
}

export default App
