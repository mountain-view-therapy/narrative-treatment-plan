import { Instance, types } from "mobx-state-tree"
import {
    possibleDiagnosis,
    PossibleDiagnosis,
    PossibleSymptom,
} from "../state/constants"
import DiagnosisModel from "./DiagnosisModel.mst"

const DiagnosticModel = types.model('DiagnosticModel', {
    diagnoses: types.array(DiagnosisModel),
}).actions((self) => {
    return {
        addNewDiagnosis(): void {
            self.diagnoses.push(DiagnosisModel.create({diagnosisName: possibleDiagnosis[0], otherDiagnosisName:"",otherSymptoms:""}))
        },
        removeDiagnosis(index: number): void {
            self.diagnoses.splice(index,1)
        },
        setDiagnoses(diagnosis: PossibleDiagnosis, index: number): void {
            self.diagnoses[index].diagnosisName = diagnosis
            self.diagnoses[index].symptoms.clear()
        },
        toggleSymptom(symptom: PossibleSymptom, index: number): void {
            if (self.diagnoses[index].symptoms.includes(symptom)) {
                self.diagnoses[index].symptoms.replace(self.diagnoses[index].symptoms.filter(s => s !== symptom))
            } else {
                self.diagnoses[index].symptoms.push(symptom)
            }
        },
        setOtherSymptoms(diagnosesIndex: number, symptoms: string): void {
            self.diagnoses[diagnosesIndex].otherSymptoms = symptoms
        },
    }
})

export default DiagnosticModel;


export interface Symptoms extends Instance<typeof DiagnosticModel> { }
