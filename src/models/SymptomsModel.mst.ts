import { Instance, types } from "mobx-state-tree"
import {
    PossibleAcademicSymptom,
    PossibleAnxietySymptom,
    PossibleCommunitySymptom,
    PossibleDepressionSymptom,
    PossibleInterpersonalSymptom,
    PossibleOccupationSymptom,
    PossiblePTSDSymptom,
    PossibleSelfCareSymptom,
} from "../state/constants"

const SymptomsModel = types.model('SymptomsModel', {
    anxietySymptoms: types.array(types.string),
    depressionSymptoms: types.array(types.string),
    ptsdSymptoms: types.array(types.string),
    otherSymptoms: types.array(types.string),
    groupSymptomsTogether: types.boolean,
    selfCareAffected: types.boolean,
    selfCareSymptoms: types.array(types.string),
    otherSelfCareSymptoms: types.string,
    occupationAffected: types.boolean,
    occupationSymptoms: types.array(types.string),
    otherOccupationSymptoms: types.string,
    academicAffected: types.boolean,
    academicSymptoms: types.array(types.string),
    otherAcademicSymptoms: types.string,
    interpersonalAffected: types.boolean,
    interpersonalSymptoms: types.array(types.string),
    otherInterpersonalSymptoms: types.string,
    communitylAffected: types.boolean,
    communitySymptoms: types.array(types.string),
    otherCommunitySymptoms: types.string,
}).actions((self) => {
    return {
        toggleAnxietySymptom(symptom: PossibleAnxietySymptom): void {
            if (self.anxietySymptoms.includes(symptom)) {
                self.anxietySymptoms.replace(self.anxietySymptoms.filter(s => s !== symptom))
            } else {
                self.anxietySymptoms.push(symptom)
            }
        },
        toggleDepressionSymptom(symptom: PossibleDepressionSymptom): void {
            if (self.depressionSymptoms.includes(symptom)) {
                self.depressionSymptoms.replace(self.depressionSymptoms.filter(s => s !== symptom))
            } else {
                self.depressionSymptoms.push(symptom)
            }
        },
        togglePTSDSymptom(symptom: PossiblePTSDSymptom): void {
            if (self.ptsdSymptoms.includes(symptom)) {
                self.ptsdSymptoms.replace(self.ptsdSymptoms.filter(s => s !== symptom))
            } else {
                self.ptsdSymptoms.push(symptom)
            }
        },
        setOtherSymptom(index: number, symptoms: string): void {
            self.otherSymptoms[index] = symptoms
        },
        addOtherSymptom(): void {
            self.otherSymptoms.push("")
        },
        removeOtherSymptom(index: number): void {
            self.otherSymptoms.replace(self.otherSymptoms.filter((os, i) => i !== index))
        },
        setGroupSystemsTogether(groupSymptomsTogether: boolean): void {
            self.groupSymptomsTogether = groupSymptomsTogether
        },
        setSelfCareAffected(selfCareAffected: boolean): void {
            self.selfCareAffected = selfCareAffected
        },
        setSelfCareSymptom(symptom: PossibleSelfCareSymptom, value: boolean): void {
            if (value === true) {
                if (!self.selfCareSymptoms.includes(symptom)) {
                    self.selfCareSymptoms.push(symptom)
                }
            } else {
                self.selfCareSymptoms.replace(self.selfCareSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherSelfCareSymptoms(symptoms: string): void {
            self.otherSelfCareSymptoms = symptoms
        },
        setOccupationAffected(occupationAffected: boolean): void {
            self.occupationAffected = occupationAffected
        },
        setOccupationSymptom(symptom: PossibleOccupationSymptom, value: boolean): void {
            if (value === true) {
                if (!self.occupationSymptoms.includes(symptom)) {
                    self.occupationSymptoms.push(symptom)
                }
            } else {
                self.occupationSymptoms.replace(self.occupationSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherOccupationSymptoms(symptoms: string): void {
            self.otherOccupationSymptoms = symptoms
        },
        setAcademicAffected(academicAffected: boolean): void {
            self.academicAffected = academicAffected
        },
        setAcademicSymptom(symptom: PossibleAcademicSymptom, value: boolean): void {
            if (value === true) {
                if (!self.academicSymptoms.includes(symptom)) {
                    self.academicSymptoms.push(symptom)
                }
            } else {
                self.academicSymptoms.replace(self.academicSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherAcademicSymptoms(symptoms: string): void {
            self.otherAcademicSymptoms = symptoms
        },
        setInterpersonalAffected(interpersonalAffected: boolean): void {
            self.interpersonalAffected = interpersonalAffected
        },
        setInterpersonalSymptom(symptom: PossibleInterpersonalSymptom, value: boolean): void {
            if (value === true) {
                if (!self.interpersonalSymptoms.includes(symptom)) {
                    self.interpersonalSymptoms.push(symptom)
                }
            } else {
                self.interpersonalSymptoms.replace(self.interpersonalSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherInterpersonalSymptoms(symptoms: string): void {
            self.otherInterpersonalSymptoms = symptoms
        },
        setCommunityAffected(communityAffected: boolean): void {
            self.communitylAffected = communityAffected
        },
        setCommunitySymptom(symptom: PossibleCommunitySymptom, value: boolean): void {
            if (value === true) {
                if (!self.communitySymptoms.includes(symptom)) {
                    self.communitySymptoms.push(symptom)
                }
            } else {
                self.communitySymptoms.replace(self.communitySymptoms.filter(s => s !== symptom))
            }
        },
        setOtherCommunitySymptoms(symptoms: string): void {
            self.otherCommunitySymptoms = symptoms
        },
    }
})

export default SymptomsModel;


export interface Symptoms extends Instance<typeof SymptomsModel> { }
