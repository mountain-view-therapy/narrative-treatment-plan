import { Instance, types } from "mobx-state-tree"

const GoalModel = types.model('GoalModel', {
    goal: types.string,
    otherGoal: types.string,
    text: types.string,
    replacementText: types.string,
    checked: false,
})

export default GoalModel;
export interface Goal extends Instance<typeof GoalModel> { }


