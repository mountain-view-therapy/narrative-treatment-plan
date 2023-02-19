import { Instance, types } from "mobx-state-tree"
import {
    AffectStates,
    affectStates,
    CognitiveFunctioningState,
    cognitiveFunctioningStates,
    FunctionalStatusStates,
    functionalStatusStates,
    InterpersonalStates,
    interpersonalStates,
    MoodStates,
    moodStates,
    RiskLevels
} from "../state/constants"

const MentalStatusExamModel = types.model('MentalStatusExamModel', {
    cognitiveFunctioning: types.enumeration('cognitiveFunctioning', cognitiveFunctioningStates),
    affect: types.enumeration('affect', affectStates),
    mood: types.enumeration('mood', moodStates),
    interpersonal: types.enumeration('interpersonal', interpersonalStates),
    functionalStatus: types.enumeration('functionalStatus', functionalStatusStates),
    noRisk: types.boolean,
    dangerToSelf: types.boolean,
    dangerToOthers: types.boolean,
    otherRisk: types.boolean,
    dangerToSelfRisk: types.enumeration('dangerToSelfRisk', ['Low', 'Medium', 'High']),
    dangerToOthersRisk: types.enumeration('dangerToOthersRisk', ['Low', 'Medium', 'High']),
    dangerToSelfEvidence: types.string,
    dangerToOthersEvidence: types.string,
    dangerToSelfPlan: types.string,
    dangerToOthersPlan: types.string,
    otherRiskInformation: types.string,
}).actions((self) => {
    return {
        setCognitiveFunctioning(cognitiveFunctioningState: CognitiveFunctioningState): void {
            self.cognitiveFunctioning = cognitiveFunctioningState
        },
        setAffect(affect: AffectStates): void {
            self.affect = affect
        },
        setMood(mood: MoodStates): void {
            self.mood = mood
        },
        setInterpersonal(interpersonal: InterpersonalStates): void {
            self.interpersonal = interpersonal
        },
        setFunctionalStatus(functionalStatus: FunctionalStatusStates): void {
            self.functionalStatus = functionalStatus
        },
        setNoRisk(risk: boolean): void {
            self.noRisk = risk
        },
        setDangerToSelf(risk: boolean): void {
            self.dangerToSelf = risk
        },
        setDangerToOthers(risk: boolean): void {
            self.dangerToOthers = risk
        },
        setOtherRisk(risk: boolean): void {
            self.otherRisk = risk
        },
        setDangerToSelfRisk(risk: RiskLevels): void {
            self.dangerToSelfRisk = risk
        },
        setDangerToOthersRisk(risk: RiskLevels): void {
            self.dangerToOthersRisk = risk
        },
        setDangerToSelfEvidence(evidence: string): void {
            self.dangerToSelfEvidence = evidence
        },
        setDangerToOthersEvidence(evidence: string): void {
            self.dangerToOthersEvidence = evidence
        },
        setDangerToSelfPlan(plan: string): void {
            self.dangerToSelfPlan = plan
        },
        setDangerToOthersPlan(plan: string): void {
            self.dangerToOthersPlan = plan
        },
        setOtherRiskInformation(plan: string): void {
            self.otherRiskInformation = plan
        },
    }
})

export default MentalStatusExamModel;


export interface MentalStatusExam extends Instance<typeof MentalStatusExamModel> { }
