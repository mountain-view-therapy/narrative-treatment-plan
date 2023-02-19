import { Instance, types } from "mobx-state-tree"
import {
    possibleInterventions,
    possibleProgressions,
    PossibleRecommendationsForMovingForward,
    possibleRecommendationsForMovingForward,
} from "../state/constants"
import InterventionModel from "./InterventionModel.mst"
import MeetingLogisticsModel from "./MeetingLogisticsModel.mst"
import MentalStatusExamModel from "./MentalStatusExamModel.mst"
import ProgressModel from "./ProgressModel.mst"
import SymptomsModel from "./SymptomsModel.mst"


const MeetingInformationModel = types.model('MeetingInformationModel', {
    meetingLogistics: MeetingLogisticsModel,
    mentalStatusExam: MentalStatusExamModel,
    problems: types.string,
    symptoms: SymptomsModel,
    interventions: types.array(InterventionModel),
    otherInterventions: types.array(types.string),
    progressions: types.array(ProgressModel),
    otherProgressions: types.array(types.string),
    identifiedProblem: types.string,
    recommendationForMovingForward: types.enumeration('recommendationForMovingForward', possibleRecommendationsForMovingForward),
    frequencyChangeExplanation: types.string,
    nextMeeting: types.string,
}).actions((self) => {
    return {
        setProblems(problems: string): void {
            self.problems = problems
        },
        setIntervention(interventionIndex: number, value: boolean): void {
            if (value === false) {
                if (self.interventions.find(i => i.possibleInterventionsIndex === interventionIndex)) {
                    self.interventions.replace(self.interventions.filter(s => s.possibleInterventionsIndex !== interventionIndex))
                }
            } else {
                if (!self.interventions.find(i => i.possibleInterventionsIndex === interventionIndex)) {
                    self.interventions.push({
                        possibleInterventionsIndex: interventionIndex,
                        text: possibleInterventions[interventionIndex].text,
                        replacementText: "",
                    })
                }
            }
        },
        setInterventionReplacementText(index: number, text: string): void {
            const intervention = self.interventions.find(i => i.possibleInterventionsIndex === index)
            if (intervention) {
                intervention.replacementText = text
            }
        },
        setOtherIntervention(index: number, intervention: string): void {
            self.otherInterventions[index] = intervention
        },
        addOtherIntervention(): void {
            self.otherInterventions.push("")
        },
        removeOtherIntervention(index: number): void {
            self.otherInterventions.replace(self.otherInterventions.filter((int, idx) => idx !== index ))
        },
        setProgress(progressIndex: number, value: boolean): void {
            if (value === false) {
                if (self.progressions.find(i => i.possibleProgressIndex === progressIndex)) {
                    self.progressions.replace(self.progressions.filter(s => s.possibleProgressIndex !== progressIndex))
                }
            } else {
                if (!self.progressions.find(i => i.possibleProgressIndex === progressIndex)) {
                    self.progressions.push({
                        possibleProgressIndex: progressIndex,
                        text: possibleProgressions[progressIndex].text,
                        replacementText: "",
                    })
                }
            }
        },
        setOtherProgression(index: number, progression: string): void {
            self.otherProgressions[index] = progression
        },
        addOtherProgression(): void {
            self.otherProgressions.push("")
        },
        removeOtherProgression(index: number): void {
            self.otherProgressions.replace(self.otherProgressions.filter((int, idx) => idx !== index ))
        },
        setProgressReplacementText(index: number, text: string): void {
            const progress = self.progressions.find(i => i.possibleProgressIndex === index)
            if (progress) {
                progress.replacementText = text
            }
        },
        setIdentifedProblem(problem: string): void {
            self.identifiedProblem = problem
        },
        setRecommendationForMovingForward(recommendation: PossibleRecommendationsForMovingForward): void {
            self.recommendationForMovingForward = recommendation
        },
        setFrequencyChangeExplanation(explanation: string): void {
            self.frequencyChangeExplanation = explanation
        },
        setNextMeeting(nextMeeting: string): void {
            self.nextMeeting = nextMeeting
        },
    }
})

export default MeetingInformationModel;


export interface MeetingInformation extends Instance<typeof MeetingInformationModel> { }
