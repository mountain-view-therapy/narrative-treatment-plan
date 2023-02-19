import { Instance, types } from 'mobx-state-tree';
import { initialState } from '../state/constants';
import MeetingInformationModel from './MeetingInformationModel.mst';

const RootModel = types
  .model('RootModel', {
    meetingInformation: MeetingInformationModel,
    currentTab: types.string,
    hydrated: false,
  }).actions((self) => {
    return {
      setCurrentTab(tab: string): void {
        self.currentTab = tab
      },
      resetNoteState(): void {
        self.meetingInformation = MeetingInformationModel.create(initialState.meetingInformation)
      },
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
