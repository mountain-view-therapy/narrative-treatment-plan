import { Instance, types } from "mobx-state-tree"
import {
    modalities, Modalities,
    frequency, Frequency, length, Length,
} from "../state/constants"

const PlanLogisticsModel = types.model('PlanLogisticsModel', {
    clientInitials: types.string,
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

export default PlanLogisticsModel;


export interface PlanLogistics extends Instance<typeof PlanLogisticsModel> { }
