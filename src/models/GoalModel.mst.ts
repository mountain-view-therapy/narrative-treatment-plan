import { Instance, getSnapshot, types } from "mobx-state-tree"
import ObjectiveModel from "./ObjectiveModel.mst"

export const GoalSelectionStates = ["UNSELECTED", "SELECTED", "OTHER"]
export type GoalSelectionState = typeof GoalSelectionStates[number]

const GoalModel = types.model('GoalModel', {
    possibleGoalsIndex: types.number,
    issue: types.string,
    possibleGoalSelectionState: types.enumeration(GoalSelectionStates),
    otherGoal: types.string,
    replacementText: types.array(types.array(types.string)),
    active: false,
    initiatedAt: types.Date,
    estimatedCompletionDate: types.Date,
    objectives: types.array(ObjectiveModel),
    updatingGoal: false,
    completed: false,
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
        setReplacementText(text: string, possibleGoalIndex: number, replacementTextIndex: number): void {
            self.replacementText[possibleGoalIndex][replacementTextIndex] = text
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
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.noProgressChecked) !== -1

        },
        isStillWorkingChecked(objectiveIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.stillWorkingChecked) !== -1
        },
        isFinishedChecked(objectiveIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.finishedChecked) !== -1
        },

        isNoProgressProgressionChecked(objectiveIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.noProgressChecked) !== -1
        },

        isStillWorkingProgressionChecked(objectiveIndex: number, progressionIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.stillWorkingChecked && objective.stillWorkingProgressions.includes(progressionIndex)) !== -1
        },
        isFinishedProgressionChecked(objectiveIndex: number, progressionIndex: number): boolean {
            return self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex && objective.finishedChecked && objective.finshedProgressions.includes(progressionIndex)) !== -1
        },


        setUpdatingGoal(updatingGoal: boolean): void {
            self.updatingGoal = updatingGoal
        },
        setNoProgressChecked(objectiveIndex: number, value: boolean): void {
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)
            if (index === -1) { return }
            const objective = getSnapshot(self.objectives[index])
            if (value === true) {
                self.objectives.splice(index, 1, { ...objective, noProgressChecked: true, stillWorkingChecked: false, finishedChecked: false })
            } else {
                self.objectives.splice(index, 1, { ...objective, noProgressChecked: false })

            }
        },
        setStillWorkingChecked(objectiveIndex: number, value: boolean): void {
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)
            if (index === -1) { return }
            const objective = getSnapshot(self.objectives[index])
            if (value === true) {
                self.objectives.splice(index, 1, { ...objective, noProgressChecked: false, stillWorkingChecked: true, finishedChecked: false })
            } else {
                self.objectives.splice(index, 1, { ...objective, stillWorkingChecked: false })

            }        },
        setFinishedChecked(objectiveIndex: number, value: boolean): void {
            const index = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndex)
            if (index === -1) { return }
            const objective = getSnapshot(self.objectives[index])
            if (value === true) {
                self.objectives.splice(index, 1, { ...objective, noProgressChecked: false, stillWorkingChecked: false, finishedChecked: true })
            } else {
                self.objectives.splice(index, 1, { ...objective, finishedChecked: false })

            }        },
        setStillWorkingProgressionChecked(objectiveIndexIn: number, progressionIndexIn: number, value: boolean): void {
            const objectiveIndex = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndexIn)
            if (objectiveIndex === -1) { return }

            console.log("setStillWorkingProgressionChecked")
            const objective = getSnapshot(self.objectives[objectiveIndex])
            const progressionChecked = objective.stillWorkingProgressions.includes(progressionIndexIn)

            if (value === true) {
                if (!progressionChecked) {
                    self.objectives.splice(objectiveIndex, 1, { ...objective, stillWorkingProgressions: [...objective.stillWorkingProgressions, progressionIndexIn] })
                }
            } else {
                const stillWorkingProgressions = objective.stillWorkingProgressions.filter(s => s !== progressionIndexIn)
                self.objectives.splice(objectiveIndex, 1, { ...objective, stillWorkingProgressions })
            }
        },
        setFinishedProgressionChecked(objectiveIndexIn: number, progressionIndexIn: number, value: boolean): void {
            const objectiveIndex = self.objectives.findIndex(objective => objective.possibleObjectiveIndex === objectiveIndexIn)
            if (objectiveIndex === -1) { return }

            const objective = getSnapshot(self.objectives[objectiveIndex])
            const progressionChecked = objective.finshedProgressions.includes(progressionIndexIn)

            if (value === true) {
                if (!progressionChecked) {
                    self.objectives.splice(objectiveIndex, 1, { ...objective, finshedProgressions: [...objective.finshedProgressions, progressionIndexIn] })

                }
            } else {
                const finshedProgressions = objective.finshedProgressions.filter(s => s !== progressionIndexIn)
                self.objectives.splice(objectiveIndex, 1, { ...objective, finshedProgressions })
            }
        },
        setStillWorkingProgressionsReplacementText(objectiveIndex: number, text: string, index: number): void {
            const objective = getSnapshot(self.objectives[objectiveIndex])

            const replaceTexts = objective.stillWorkingProgressionsReplacementText // .set(index.toString(), text)
            const newReplaceTexts = { ...replaceTexts };
            newReplaceTexts[index.toString()] = text
            self.objectives.splice(objectiveIndex, 1, { ...objective, stillWorkingProgressionsReplacementText: { ...newReplaceTexts } })
        },
        getStillWorkingProgressionsReplacementText(objectiveIndex: number, index: number): string {
            if (!self.objectives[objectiveIndex]) { return "" }

            return self.objectives[objectiveIndex].stillWorkingProgressionsReplacementText.get(index.toString()) || ""

        },
        setFinshedProgressionsReplacementText(objectiveIndex: number, text: string, index: number): void {
            const objective = getSnapshot(self.objectives[objectiveIndex])

            const replaceTexts = objective.finshedProgressionsReplacementText // .set(index.toString(), text)
            const newReplaceTexts = { ...replaceTexts };
            newReplaceTexts[index.toString()] = text
            self.objectives.splice(objectiveIndex, 1, { ...objective, finshedProgressionsReplacementText: { ...newReplaceTexts } })
        },
        getFinshedProgressionsReplacementText(objectiveIndex: number, index: number): string {
            if (!self.objectives[objectiveIndex]) { return "" }

            return self.objectives[objectiveIndex].finshedProgressionsReplacementText.get(index.toString()) || ""

        },
        setCompleted(completed: boolean): void {
            self.completed = completed
        },

    }
})

export default GoalModel;
export interface IGoal extends Instance<typeof GoalModel> { }


