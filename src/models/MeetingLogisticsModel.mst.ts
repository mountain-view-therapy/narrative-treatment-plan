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





        setClientInitials(intitals: string): void {
            self.clientInitials = intitals
        },
        setTelehealthPlatform(platform: string): void {
            self.telehealthPlatform = platform
        },
        setTelehealthAppropriate(appropriate: string): void {
            self.telehealthAppropriate = appropriate
        },
        setTelehealthConsent(consent: string): void {
            self.telehealthConsent = consent
        },
        setOtherAddress(address: string): void {
            self.otherAddress = address
        },
        setStartTime(startTime: string): void {
            self.startTime = startTime
        },
        setEndTime(endTime: string): void {
            self.endTime = endTime
        },

        setOtherCptCode(code: string): void {
            self.otherCptCode = code
        },

        setClientPresent(present: boolean): void {
            self.clientPresent = present
        },
        setSpousePresent(present: boolean): void {
            self.spousePresent = present
        },
        setPartnerPresent(present: boolean): void {
            self.partnerPresent = present
        },
        setParentPresent(present: boolean): void {
            self.parentPresent = present
        },
        setSiblingPresent(present: boolean): void {
            self.siblingPresent = present
        },
        setchildPresent(present: boolean): void {
            self.childPresent = present
        },
        setOtherPresent(present: boolean): void {
            self.otherPresent = present
        },
        setSpouseName(name: string): void {
            self.spouseName = name
        },
        setPartnerName(name: string): void {
            self.partnerName = name
        },
        setParentName(name: string): void {
            self.parentName = name
        },
        setSiblingName(name: string): void {
            self.siblingName = name
        },
        setchildName(name: string): void {
            self.childName = name
        },
        setOtherName(name: string): void {
            self.otherName = name
        },


        setFirstDateOfService(date: Date): void {
            self.firstDateOfService = date
        }

    }
})

export default MeetingLogisticsModel;


export interface MeetingLogistics extends Instance<typeof MeetingLogisticsModel> { }
