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
        self.treatmentPlan = TreatmentPlanModel.create(initialState.treatmentPlan)
      },
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
