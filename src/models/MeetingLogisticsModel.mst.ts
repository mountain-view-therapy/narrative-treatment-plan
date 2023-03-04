import { Instance, types } from "mobx-state-tree"
import {
    modalities, Modalities,
    frequency, Frequency, length, Length,
} from "../state/constants"

const MeetingLogisticsModel = types.model('MeetingLogisticsModel', {
    clientInitials: types.string,
    telehealthPlatform: types.enumeration('telehealthPlatform', ['Simple Practice', 'Google Meet']),
    telehealthAppropriate: types.enumeration('telehealthAppropriate', ['Yes', 'No']),
    telehealthConsent: types.enumeration('telehealthConsent', ['Yes', 'No']),
    otherAddress: types.string,
    startTime: types.string,
    endTime: types.string,
    otherCptCode: types.string,
    clientPresent: types.boolean,
    spousePresent: types.boolean,
    partnerPresent: types.boolean,
    parentPresent: types.boolean,
    siblingPresent: types.boolean,
    childPresent: types.boolean,
    otherPresent: types.boolean,
    spouseName: types.optional(types.string, ""),
    partnerName: types.optional(types.string, ""),
    parentName: types.optional(types.string, ""),
    siblingName: types.optional(types.string, ""),
    childName: types.optional(types.string, ""),
    otherName: types.optional(types.string, ""),



    firstDateOfService: types.Date,
    modalityPlanned: types.enumeration('modalityPlanned', modalities),
    meetingFrequency: types.enumeration('frequency', frequency),
    treatmentLength: types.enumeration('length', length),
    otherMeetingFrequency: types.string,
    otherTreatmentLength: types.string,


}).actions((self) => {
    return {
        setModalityPlanned(modality: Modalities): void {
            self.modalityPlanned = modality
        },
        setMeetingFrequency(frequency: Frequency): void {
            self.meetingFrequency = frequency
        },
        setTreatmentLength(length: Length): void {
            self.treatmentLength = length
        },
        setOtherMeetingFrequency(frequency: string): void {
            self.otherMeetingFrequency = frequency
        },
        setOtherTreatmentLength(length: string): void {
            self.otherTreatmentLength = length
        },
        setClientInitials(intitals: string): void {
            self.clientInitials = intitals
        },
        setFirstDateOfService(date: Date): void {
            self.firstDateOfService = date
        }
    }
})

export default MeetingLogisticsModel;


export interface MeetingLogistics extends Instance<typeof MeetingLogisticsModel> { }
