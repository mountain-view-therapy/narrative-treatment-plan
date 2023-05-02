import { Instance, types } from "mobx-state-tree"

// export const ProgressStates = ["Unselected", "No Progress", "Still Working", "Finished"]
// export type ProgressState = typeof ProgressStates[number]

const ObjectiveModel = types.model('ObjectiveModel', {
    possibleObjectiveIndex: types.number,
    replacementText: types.array(types.string),
    noProgressChecked: false,
    stillWorkingChecked: false,
    finishedChecked: false,
    stillWorkingProgressions: types.array(types.number),
    stillWorkingProgressionsReplacementText: types.map(types.string),
    finshedProgressions: types.array(types.number),
    finshedProgressionsReplacementText: types.map(types.string),

}).actions((self) => {
    return {

        // setNoProgressChecked(value: boolean): void {
        //     console.log("setNoProgressChecked: ", value)
        //     self.noProgressChecked = value
        // },
    }
})

export default ObjectiveModel;
export interface IObjective extends Instance<typeof ObjectiveModel> { }


