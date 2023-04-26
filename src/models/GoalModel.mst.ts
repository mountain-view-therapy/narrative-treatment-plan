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
    objectives: types.array(types.reference(ObjectiveModel)),
    updatingGoal: false,
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
        isNoProgressChecked(objectiveIndex: number): boolean {
            const poop = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.noProgressChecked) !== -1
            console.log("isNoProgressChecked: ", objectiveIndex, " : ", poop)
            return poop;

        },
        isStillWorkingChecked(objectiveIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.stillWorkingChecked) !== -1
        },
        isFinishedChecked(objectiveIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.finishedChecked) !== -1
        },

        isNoProgressProgressionChecked(objectiveIndex: number): boolean {
            const poop = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.noProgressChecked) !== -1
            console.log("isNoProgressChecked: ", objectiveIndex, " : ", poop)
            return poop;

        },

        isStillWorkingProgressionChecked(objectiveIndex: number, progressionIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.stillWorkingChecked && objective.stillWorkingProgressions.includes(progressionIndex)) !== -1
        },
        isFinishedProgressionChecked(objectiveIndex: number, progressionIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.finishedChecked && objective.finshedCheckingProgressions.includes(progressionIndex)) !== -1
        },


        setUpdatingGoal(updatingGoal: boolean): void {
            self.updatingGoal = updatingGoal
        },
        setNoProgressChecked(objectiveIndex: number, value: boolean): void {
            console.log("setNoProgressChecked: ", objectiveIndex, " : ", value)
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)
            if (index === -1) { return }
            self.objectives.splice(index, 1, { ...self.objectives[index], noProgressChecked: value })
        },
        setStillWorkingChecked(objectiveIndex: number, value: boolean): void {
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)
            if (index === -1) { return }
            self.objectives.splice(index, 1, { ...self.objectives[index], stillWorkingChecked: value })
        },
        setFinishedChecked(objectiveIndex: number, value: boolean): void {
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)
            if (index === -1) { return }
            self.objectives.splice(index, 1, { ...self.objectives[index], finishedChecked: value })
        },
        setStillWorkingProgressionChecked(objectiveIndexIn: number, progressionIndexIn: number, value: boolean): void {
            const objectiveIndex = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndexIn)
            if (objectiveIndex === -1) { return }
            const progressionSelected = self.objectives[objectiveIndex].stillWorkingProgressions.includes(progressionIndexIn)

            if (value === true) {
                if (!progressionSelected) {
                    self.objectives[objectiveIndex].stillWorkingProgressions.push(progressionIndexIn)
                }
            } else {
                self.objectives[objectiveIndex].stillWorkingProgressions.replace(self.objectives[objectiveIndex].stillWorkingProgressions.filter(s => s !== progressionIndexIn))
            }
        },
        setFinishedProgressionChecked(objectiveIndexIn: number, progressionIndexIn: number, value: boolean): void {
            const objectiveIndex = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndexIn)
            if (objectiveIndex === -1) { return }
            const progressionChecked = self.objectives[objectiveIndex].finshedCheckingProgressions.includes(progressionIndexIn)

            if (value === true) {
                if (!progressionChecked) {
                    self.objectives[objectiveIndex].finshedCheckingProgressions.push(progressionIndexIn)
                }
            } else {
                self.objectives[objectiveIndex].finshedCheckingProgressions.replace(self.objectives[objectiveIndex].finshedCheckingProgressions.filter(s => s !== progressionIndexIn))
            }
        },
    }
})

export default GoalModel;
export interface Goal extends Instance<typeof GoalModel> { }


