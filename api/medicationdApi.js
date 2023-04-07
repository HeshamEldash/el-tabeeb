import apiEngine from "./apiEngine";



const getRegularMedications = ({ patient_id }) => apiEngine.get("/regular-prescription-list/", { patient_id: patient_id })
const getPrescriptions = ({ patient_id }) => apiEngine.get("/prescription-list/", { patient_id: patient_id })
const getPatientAddedMedication = ({ patient_id }) => apiEngine.get("/get-regular-medication/", { patient_id: patient_id })

const addRegularMedication = (data, patient_id)=> apiEngine.post("/add-regular-medication/",data,{ patient_id: patient_id } )
    
   

export default { addRegularMedication,getRegularMedications, getPrescriptions, getPatientAddedMedication}