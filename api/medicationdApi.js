import apiEngine from "./apiEngine";



const getRegularMedications = ({ patient_id }) => apiEngine.get("/regular-prescription-list/", { patient_id: patient_id })
const getPrescriptions = ({ patient_id }) => apiEngine.get("/prescription-list/", { patient_id: patient_id })


export default { getRegularMedications, getPrescriptions}