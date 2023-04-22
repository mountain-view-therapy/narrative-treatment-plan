import { Instance, types } from "mobx-state-tree"
import ObjectiveModel from "./ObjectiveModel.mst"

export const GoalSelectionStates = ["UNSELECTED", "SELECTED", "OTHER"]
export type GoalSelectionState = typeof GoalSelectionStates[number]

const GoalModel = types.model('GoalModel', {
    possibleGoalsIndex: types.number,
    issue: types.string,
    possibleGoalSelectionState: types.enumeration(GoalSelectionStates),
    otherGoal: types.string,
    replacementText: types.array(types.string),
    active: false,
    initiatedAt: types.Date,
    estimatedCompletionDate: types.Date,
    objectives: types.array(ObjectiveModel),
}).actions((self) => {
    return {
        setIssue(issue: string): void {
            self.issue = issue
        },
        setActive(): void {
            self.active = true
        },
        setCheckedGoal(index: number, checked: boolean): void {
            if (checked) {
                self.possibleGoalSelectionState = "SELECTED"
                self.possibleGoalsIndex = index
            } else {
                self.possibleGoalSelectionState = "UNSELECTED"
            }
        },
        setOtherGoal(goal: string): void {
            self.otherGoal = goal
        },
        setOtherGoalChecked(checked: boolean): void {
            if (checked) {
                self.possibleGoalSelectionState = "OTHER"
            } else {
                self.possibleGoalSelectionState = "UNSELECTED"
            }
        },
        setReplacementText(text: string, index: number): void {
            self.replacementText[index] = text
        },
        setInitiatedAt(date: Date): void {
            self.initiatedAt = date
        },
        setEstimatedCompletionDate(date: Date): void {
            self.estimatedCompletionDate = date
        },
        setObjectiveChecked(objectiveIndex: number, value: boolean): void {
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)

            if (value === true) {
                if (index === -1) {
                    self.objectives.push(ObjectiveModel.create({ possibleObjectiveIndex: objectiveIndex }))
                }
            } else {
                self.objectives.replace(self.objectives.filter(s => s.possibleObjectiveIndex !== objectiveIndex))
            }
        },
        isObjectiveChecked(objectiveIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex) !== -1
        },
    }
})

export default GoalModel;
export interface Goal extends Instance<typeof GoalModel> { }


