import patientData from "../data/patients"
import { NonSensitivePatientEntry, PatientEntry } from "../types"

const getEntries = (): Array<PatientEntry> => {
  return patientData
}

const getNonSensitiveEntries = (): Array<NonSensitivePatientEntry> => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    gender,
    occupation,
    dateOfBirth,
  }))
}

export default {
  getEntries,
  getNonSensitiveEntries,
}
