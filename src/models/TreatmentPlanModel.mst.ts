import { Instance, types } from "mobx-state-tree"
import {
    possibleInterventions,
} from "../state/constants"
import DiagnosticModel from "./DiagnosticModel.mst"
import FunctioningModel from "./Functioning.mst"
import GoalModel, { Goal } from "./GoalModel.mst"
import InterventionModel from "./InterventionModel.mst"
import MeetingLogisticsModel from "./MeetingLogisticsModel.mst"



const TreatmentPlanModel = types.model('TreatmentPlanModel', {
    meetingLogistics: MeetingLogisticsModel,
    diagnostics: DiagnosticModel,
    functioning: FunctioningModel,
    interventions: types.array(InterventionModel),
    otherInterventions: types.array(types.string),
    goals: types.array(GoalModel),
    identifiedProblem: types.string,
}).actions((self) => {
    return {
        setIntervention(interventionIndex: number, value: boolean): void {
            const intervention = self.interventions.find(i => i.possibleInterventionsIndex === interventionIndex)

            if (value === false) {
                if (intervention) {
                    intervention.checked = false
                }
            } else {
                if (!intervention) {
                    self.interventions.push({
                        possibleInterventionsIndex: interventionIndex,
                        text: possibleInterventions[interventionIndex].text,
                        replacementText: "",
                        checked: true,
                    })
                } else {
                    intervention.checked = true
                }
            }
        },
        setInterventionReplacementText(index: number, text: string): void {
            const intervention = self.interventions.find(i => i.possibleInterventionsIndex === index)
            if (intervention) {
                intervention.replacementText = text
            }
        },
        setOtherIntervention(index: number, intervention: string): void {
            self.otherInterventions[index] = intervention
        },
        addOtherIntervention(): void {
            self.otherInterventions.push("")
        },
        removeOtherIntervention(index: number): void {
            self.otherInterventions.replace(self.otherInterventions.filter((int, idx) => idx !== index))
        },
        setIdentifedProblem(problem: string): void {
            self.identifiedProblem = problem
        },
        addGoal(goal: Goal): void {
            self.goals.push(GoalModel.create(goal))
        },
        removeGoal(index: number): void {
            self.goals.splice(index,1)
        },
        updateGoal(goal: Goal, index: number): void {
            self.goals.splice(index,1, GoalModel.create(goal))
        },
    }
})

export default TreatmentPlanModel;


export interface MeetingInformation extends Instance<typeof TreatmentPlanModel> { }
