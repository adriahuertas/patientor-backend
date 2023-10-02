export type PatientEntry = {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: string
  occupation: string
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">

export type DiagnoseEntry = {
  code: string
  name: string
  latin?: string
}
