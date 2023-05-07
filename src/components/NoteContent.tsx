import { observer } from "mobx-react-lite"
import { getState } from "../state/provider"
import { possibleGoals, possibleObjectives, possibleProgressions } from "../state/constants"
import { Typography } from "@mui/material"

const NoteContent = () => {

    const { treatmentPlan: {
        planLogistics: {
            clientInitials,
            firstDateOfService,
            modalityPlanned,
            treatmentLength,
            otherTreatmentLength,
        },
        diagnostics: {
            diagnoses
        },
        functioning: {
            selfCareAffected,
            selfCareSymptoms,
            otherSelfCareSymptoms,
            occupationAffected,
            occupationSymptoms,
            otherOccupationSymptoms,
            academicAffected,
            academicSymptoms,
            otherAcademicSymptoms,
            interpersonalAffected,
            interpersonalSymptoms,
            otherInterpersonalSymptoms,
            communitylAffected,
            communitySymptoms,
            otherCommunitySymptoms,
        },
        identifiedProblem,
        interventions,
        otherInterventions,
        goal1,
        goal2,
        goal3,

    } } = getState()


    const replaceText = (text: string, replacementText: string[], issue?: string) => {
        return text.replace(/\[ISSUE\]/g, issue || "")
            .replace(/\[CLIENT\]/g, clientInitials)
            .replace('[REPLACEMENT1]', replacementText[0])
            .replace('[REPLACEMENT2]', replacementText[1])
    }
    const replaceClientsIntitals = (text: string) => {
        return text.replace('[CLIENT]', clientInitials)
    }

    const formatObjectiveText = (text: string) => {
        return text.replace(';', '<ul><li>').replace(',', '</li><li>') + "</li></ul>"
    }

    return (
        <div>


            <div>
                <b>First Date of Service: </b>
                {firstDateOfService.toDateString()}
            </div>

            <div>
                {clientInitials} participated in the development of this plan.
            </div>

            <div>
                <b>Modality Planned: </b>
                {modalityPlanned}
            </div>

            <div>
                <b>Estimated Length of Treatment:</b>
                {treatmentLength === 'Other' ? otherTreatmentLength : treatmentLength}
            </div>

            <div>
                <p> </p>
                <b>Diagnoses</b>
                {diagnoses.map(diagnosis => <>
                    <p>{diagnosis.otherDiagnosisName || diagnosis.diagnosisName}</p>
                    <ul>
                        {diagnosis.symptoms.map(symptom =>
                            <li>
                                {symptom}
                            </li>
                        )
                        }
                        {diagnosis.otherSymptoms && <li>{diagnosis.otherSymptoms}</li>}
                    </ul>
                </>
                )}
            </div>
            <div>

                {selfCareAffected &&
                    <p>
                        These symptoms affect {clientInitials || <b>Client's Initials</b>}'s self care.
                        {selfCareSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                        <span> {otherSelfCareSymptoms} </span>
                    </p>
                }
                {occupationAffected &&
                    <p>
                        These symptoms affect {clientInitials || <b>Client's Initials</b>}'s occupational functioning.
                        {occupationSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                        <span> {otherOccupationSymptoms} </span>
                    </p>
                }
                {academicAffected &&
                    <p>
                        These symptoms affect {clientInitials || <b>Client's Initials</b>}'s academic functioning.
                        {academicSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                        <span> {otherAcademicSymptoms} </span>
                    </p>
                }
                {interpersonalAffected &&
                    <p>
                        These symptoms affect {clientInitials || <b>Client's Initials</b>}'s interpersonal functioning.
                        {interpersonalSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                        <span> {otherInterpersonalSymptoms} </span>
                    </p>
                }
                {communitylAffected &&
                    <p>
                        These symptoms affect {clientInitials || <b>Client's Initials</b>}'s community functioning.
                        {communitySymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                        <span> {otherCommunitySymptoms} </span>
                    </p>
                }
            </div>

            {(goal1.issue || goal2.issue || goal3.issue) &&
                <>
                    <b>Goals</b>
                    {goal1.possibleGoalSelectionState !== 'UNSELECTED' && <p>Goal 1:</p>}
                    {
                        goal1.possibleGoalSelectionState === 'SELECTED' &&
                        <p>{replaceText(possibleGoals[goal1.possibleGoalsIndex].text, goal1.replacementText, goal1.issue)}</p>
                    }
                    {
                        goal1.possibleGoalSelectionState === 'OTHER' &&
                        <p>{replaceText(goal1.otherGoal, [])}</p>
                    }
                    {
                        goal1.objectives.length > 0 &&
                        <>
                            <p>Goal 1 Objectives: </p>

                            {goal1.objectives.map((objective, index) =>
                                <>
                                    {replaceText(possibleObjectives[objective.possibleObjectiveIndex].title, goal1.replacementText, goal1.issue)}
                                    <ul>
                                        {!goal1.updatingGoal && possibleObjectives[objective.possibleObjectiveIndex].objectiveText.map(text => <li>{replaceText(text, [],)}</li>)}
                                    </ul>
                                    <ul>
                                        {!goal2.updatingGoal && objective.noProgressChecked && <li>{replaceText(possibleObjectives[index].options["No Progress"].text, [])}</li>}
                                        {!goal2.updatingGoal && objective.stillWorkingChecked &&
                                            <li>
                                                {replaceText(possibleObjectives[index].options["Still Working"].text, [])}
                                                <ul>
                                                    {objective.stillWorkingProgressions.map(progressionIdx => <li>{replaceText(possibleProgressions[progressionIdx].text, [objective.stillWorkingProgressionsReplacementText.get(progressionIdx.toString()) || ""])}</li>)}

                                                </ul>
                                            </li>
                                        }
                                        {!goal2.updatingGoal && objective.finishedChecked &&
                                            <li>
                                                {replaceText(possibleObjectives[index].options["Finished"].text, [])}
                                                <ul>
                                                    {objective.finshedProgressions.map(progressionIdx => <li>{replaceText(possibleProgressions[progressionIdx].text, [objective.finshedProgressionsReplacementText.get(progressionIdx.toString()) || ""])}</li>)}

                                                </ul>
                                            </li>
                                        }
                                    </ul>

                                    <p></p>
                                </>
                            )
                            }

                        </>
                    }
                    {goal1.possibleGoalSelectionState !== 'UNSELECTED' && <p style={{ paddingLeft: 15 }}>Estimated Completion Date: {goal1.estimatedCompletionDate.toDateString()}</p>}

                    {goal2.possibleGoalSelectionState !== 'UNSELECTED' && <p>Goal 2:</p>}
                    {
                        goal2.possibleGoalSelectionState === 'SELECTED' &&
                        <p>{replaceText(possibleGoals[goal2.possibleGoalsIndex].text, goal2.replacementText, goal2.issue)}</p>
                    }
                    {
                        goal2.possibleGoalSelectionState === 'OTHER' &&
                        <p>{replaceText(goal2.otherGoal, [])}</p>
                    }
                    {
                        goal2.objectives.length > 0 &&
                        <>
                            <p>Goal 2 Objectives: </p>
                            {goal2.objectives.map((objective, index) =>
                                <>
                                    {replaceText(possibleObjectives[objective.possibleObjectiveIndex].title, goal2.replacementText, goal2.issue)}
                                    <ul>
                                        {!goal2.updatingGoal && possibleObjectives[objective.possibleObjectiveIndex].objectiveText.map(text => <li>{replaceText(text, [],)}</li>)}
                                    </ul>
                                    <ul>
                                        {!goal2.updatingGoal && objective.noProgressChecked && <li>{replaceText(possibleObjectives[index].options["No Progress"].text, [])}</li>}
                                        {!goal2.updatingGoal && objective.stillWorkingChecked &&
                                            <li>
                                                {replaceText(possibleObjectives[index].options["Still Working"].text, [])}
                                                <ul>
                                                    {objective.stillWorkingProgressions.map(progressionIdx => <li>{replaceText(possibleProgressions[progressionIdx].text, [objective.stillWorkingProgressionsReplacementText.get(progressionIdx.toString()) || ""])}</li>)}

                                                </ul>
                                            </li>
                                        }
                                        {!goal2.updatingGoal && objective.finishedChecked &&
                                            <li>
                                                {replaceText(possibleObjectives[index].options["Finished"].text, [])}
                                                <ul>
                                                    {objective.finshedProgressions.map(progressionIdx => <li>{replaceText(possibleProgressions[progressionIdx].text, [objective.finshedProgressionsReplacementText.get(progressionIdx.toString()) || ""])}</li>)}

                                                </ul>
                                            </li>
                                        }
                                    </ul>

                                </>
                            )
                            }
                        </>
                    }
                    {goal2.possibleGoalSelectionState !== 'UNSELECTED' && <p style={{ paddingLeft: 15 }}>Estimated Completion Date: {goal2.estimatedCompletionDate.toDateString()}</p>}

                    {goal3.possibleGoalSelectionState !== 'UNSELECTED' && <p>Goal 3:</p>}
                    {
                        goal3.possibleGoalSelectionState === 'SELECTED' &&
                        <p>{replaceText(possibleGoals[goal3.possibleGoalsIndex].text, goal3.replacementText, goal3.issue)}</p>
                    }
                    {
                        goal3.possibleGoalSelectionState === 'OTHER' &&
                        <p>{replaceText(goal3.otherGoal, [])}</p>
                    }
                    {
                        goal3.objectives.length > 0 &&
                        <>
                            <p>Goal 3 Objectives: </p>
                            {goal3.objectives.map((objective, index) =>
                                <>
                                    {replaceText(possibleObjectives[objective.possibleObjectiveIndex].title, goal3.replacementText, goal3.issue)}
                                    <ul>
                                        {!goal3.updatingGoal && possibleObjectives[objective.possibleObjectiveIndex].objectiveText.map(text => <li>{replaceText(text, [],)}</li>)}
                                    </ul>
                                    <ul>
                                        {!goal3.updatingGoal && objective.noProgressChecked && <li>{replaceText(possibleObjectives[index].options["No Progress"].text, [])}</li>}
                                        {!goal3.updatingGoal && objective.stillWorkingChecked &&
                                            <li>
                                                {replaceText(possibleObjectives[index].options["Still Working"].text, [])}
                                                <ul>
                                                    {objective.stillWorkingProgressions.map(progressionIdx => <li>{replaceText(possibleProgressions[progressionIdx].text, [objective.stillWorkingProgressionsReplacementText.get(progressionIdx.toString()) || ""])}</li>)}

                                                </ul>
                                            </li>
                                        }
                                        {!goal3.updatingGoal && objective.finishedChecked &&
                                            <li>
                                                {replaceText(possibleObjectives[index].options["Finished"].text, [])}
                                                <ul>
                                                    {objective.finshedProgressions.map(progressionIdx => <li>{replaceText(possibleProgressions[progressionIdx].text, [objective.finshedProgressionsReplacementText.get(progressionIdx.toString()) || ""])}</li>)}

                                                </ul>
                                            </li>
                                        }
                                    </ul>

                                </>
                            )
                            }
                        </>
                    }
                    {goal3.possibleGoalSelectionState !== 'UNSELECTED' && <p style={{ paddingLeft: 15 }}>Estimated Completion Date: {goal3.estimatedCompletionDate.toDateString()}</p>}

                </>
            }

            {(interventions.length > 0 || otherInterventions.length > 0) &&
                <b>Interventions:</b>
            }
            {interventions.filter(i => i.checked).map(intervention => (
                <p key={intervention.text}>{replaceText(intervention.text, [intervention.replacementText], identifiedProblem)}</p>)
            )
            }

            {otherInterventions.map(intervention => (
                <p key={intervention}>{intervention}</p>)
            )
            }
        </div >
    )

}

export default observer(NoteContent)