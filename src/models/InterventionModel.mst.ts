import { Instance, types } from "mobx-state-tree"

const InterventionModel = types.model('InterventionModel', {
    possibleInterventionsIndex: types.number,
    text: types.string,
    replacementText: types.string,
    checked: false,
})

export default InterventionModel;
export interface Intervention extends Instance<typeof InterventionModel> { }


