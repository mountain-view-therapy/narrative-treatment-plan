import { Instance, types } from "mobx-state-tree"
import { possibleDiagnosis } from "../state/constants";

const DiagnosisModel = types.model('DiagnosisModel', {
    diagnosisName: types.enumeration('diagnoses', possibleDiagnosis),
    symptoms: types.array(types.string),
    otherDiagnosisName: types.string,
    otherSymptoms: types.string,
}).actions((self) => {
    return {
        setDiagnosisName(diagnosisName: string): void {
            self.otherDiagnosisName = diagnosisName
        }
    }
})

export default DiagnosisModel;
export interface Diagnosis extends Instance<typeof DiagnosisModel> { }


