import { Instance, types } from 'mobx-state-tree';
import { initialState } from '../state/constants';
import TreatmentPlanModel from './TreatmentPlanModel.mst';

const RootModel = types
  .model('RootModel', {
    treatmentPlan: TreatmentPlanModel,
    currentTab: types.string,
    hydrated: false,
  }).actions((self) => {
    return {
      setCurrentTab(tab: string): void {
        self.currentTab = tab
      },
      resetNoteState(): void {
        //window.localStorage.clear()
        window.localStorage.removeItem('root3')
        window.localStorage.clear()

        self.treatmentPlan = TreatmentPlanModel.create(initialState.treatmentPlan)
        window.localStorage.clear()
        window.localStorage.removeItem('root3')
        // window.localStorage.clear()

      },
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
