import { Instance, types } from "mobx-state-tree"

// export const ProgressStates = ["Unselected", "No Progress", "Still Working", "Finished"]
// export type ProgressState = typeof ProgressStates[number]

const ObjectiveModel = types.model('ObjectiveModel', {
    possibleObjectiveIndex: types.number,
    noProgressChecked: false,
    stillWorkingChecked: false,
    finishedChecked: false,
    stillWorkingProgressions: types.array(types.number),
    finshedCheckingProgressions: types.array(types.number),

}).actions((self) => {
    return {


        // setIssue(issue: string): void {
        //     self.issue = issue
        // },
        // setActive(): void {
        //     self.active = true
        // },
        // setCheckedGoal(index: number, checked: boolean): void {
        //     if (checked) {
        //         self.possibleGoalSelectionState = "SELECTED"
        //         self.possibleGoalsIndex = index
        //     } else {
        //         self.possibleGoalSelectionState = "UNSELECTED"
        //     }
        // },
        // setOtherGoal(goal: string): void {
        //     self.otherGoal = goal
        // },
        // setOtherGoalChecked(checked: boolean): void {
        //     if (checked) {
        //         self.possibleGoalSelectionState = "OTHER"
        //     } else {
        //         self.possibleGoalSelectionState = "UNSELECTED"
        //     }
        // },
        // setReplacementText(text: string, index: number): void {
        //     self.replacementText[index] = text
        // },
        // setInitiatedAt(date: Date): void {
        //     self.initiatedAt = date
        // },
    }
})

export default ObjectiveModel;
export interface GoObjectiveal extends Instance<typeof ObjectiveModel> { }


