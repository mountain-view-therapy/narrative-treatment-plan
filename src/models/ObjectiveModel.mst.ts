import { Instance, types } from "mobx-state-tree"

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

    }
})

export default ObjectiveModel;
export interface IObjective extends Instance<typeof ObjectiveModel> { }


