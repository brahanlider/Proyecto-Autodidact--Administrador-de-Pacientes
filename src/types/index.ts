export type Patient = {
  id: string;
  patientName: string;
  caretaker: string;
  email: string;
  date: Value;
  symptoms: string;
};

export type DraftPatient = Omit<Patient, "id">;
//cuidador:
// correo electrónico:
// fecha:
// síntomas:

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];
