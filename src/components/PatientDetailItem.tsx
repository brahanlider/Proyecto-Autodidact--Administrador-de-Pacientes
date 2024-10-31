
type PatientDetailItemProps = {
  label: string,
  input: string,
}

export default function PatientDetailItem({ label, input }: PatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-800 uppercase flex items-center">
      {label}:
      <span className="font-normal normal-case ml-2 text-gray-600">{input}</span>
    </p>
  )
}
