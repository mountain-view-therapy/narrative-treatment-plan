import { Instance, types } from "mobx-state-tree"

export const GoalSelectionStates = ["UNSELECTED", "SELECTED", "OTHER"]
export type GoalSelectionState = typeof GoalSelectionStates[number]

const GoalModel = types.model('GoalModel', {
    possibleGoalsIndex: types.number,
    issue: types.string,
    possibleGoalSelectionState: types.enumeration(GoalSelectionStates),
    otherGoal: types.string,
    replacementText: types.array(types.string),
    active: false,
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
        }
    }
})

export default GoalModel;
export interface Goal extends Instance<typeof GoalModel> { }


