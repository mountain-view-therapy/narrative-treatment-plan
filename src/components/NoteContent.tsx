import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import dayjs from 'dayjs-ext'
import timeZonePlugin from 'dayjs-ext/plugin/timeZone'
import { observer } from "mobx-react-lite"
import { getState } from "../state/provider"

const NoteContent = () => {

    const { meetingInformation: {
        meetingLogistics: {
            clientInitials,
            telehealthPlatform,
            telehealthAppropriate,
            telehealthConsent,
            startTime,
            endTime,
            clientPresent,
            spouseName,
            spousePresent,
            partnerName,
            partnerPresent,
            parentName,
            parentPresent,
            siblingName,
            siblingPresent,
            childName,
            childPresent,
            otherName,
            otherPresent,



            firstDateOfService,
            modalityPlanned,
            meetingFrequency,
            treatmentLength
        },
        mentalStatusExam: {
            cognitiveFunctioning,
            affect,
            mood,
            interpersonal,
            functionalStatus,
            noRisk,
            dangerToSelf,
            dangerToOthers,
            otherRisk,
            dangerToSelfRisk,
            dangerToOthersRisk,
            dangerToSelfEvidence,
            dangerToOthersEvidence,
            dangerToSelfPlan,
            dangerToOthersPlan,
            otherRiskInformation,
        },
        problems,
        symptoms: {
            anxietySymptoms,
            depressionSymptoms,
            ptsdSymptoms,
            otherSymptoms,
            groupSymptomsTogether,
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
        interventions,
        otherInterventions,
        progressions,
        otherProgressions,
        identifiedProblem,
        recommendationForMovingForward,
        frequencyChangeExplanation,
        nextMeeting,
    } } = getState()

    dayjs.extend(timeZonePlugin).locale('cs')

    const replaceText = (text: string, replacementText: string) => {
        return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]', replacementText)
    }

    // if (!startTime || !endTime) {
    //     return (
    //         <Box>
    //             <Typography>Please fill out all necessary fields</Typography>
    //             <Typography>Missing Fields</Typography>
    //             <ul>
    //                 {!startTime &&
    //                     <li>Start Time in <a href="/narrative-treatment-plan/#/meeting-logistics">Meeting Logistics tab</a></li>
    //                 }
    //                 {!endTime &&
    //                     <li>End Time in <a href="/narrative-treatment-plan/#/meeting-logistics">Meeting Logistics tab</a></li>
    //                 }
    //             </ul>
    //         </Box>
    //     )
    // }

    return (
        <div>


            <div>
                <b>First Date of Service:</b>
                {firstDateOfService.toDateString()}
            </div>

            <div>
                {clientInitials} participated in the development of this plan.
            </div>

            <div>
                <b>Modality Planned:</b>
                {modalityPlanned}
            </div>

            <div>
                <b>Meeting Frequency:</b>
                {meetingFrequency}
            </div>

            <div>
                <b>Estimated Length of Treatment:</b>
                {treatmentLength}
            </div>














            <div><b>Mental Status Exam</b>
                <ul>
                    {cognitiveFunctioning &&
                        <li>
                            <b>Cognitive Functioning: </b> {cognitiveFunctioning}
                        </li>
                    }
                    {affect &&
                        <li>
                            <b>Affect: </b> {affect}
                        </li>
                    }
                    {mood &&
                        <li>
                            <b>Mood: </b> {mood}
                        </li>
                    }
                    {interpersonal &&
                        <li>
                            <b>Interpersonal: </b> {interpersonal}
                        </li>
                    }
                    {functionalStatus &&
                        <li>
                            <b>Functional Status: </b> {functionalStatus}
                        </li>
                    }
                </ul>

                {(noRisk || dangerToOthers || dangerToSelf || otherRisk) &&
                    <>
                        <b>Risk Status: </b>
                        <ul>
                            {noRisk && <li>No Significant Risk Factors presented</li>}
                            {dangerToSelf &&
                                <li>
                                    Danger to Self
                                    <ul>
                                        <li>Risk Level: {dangerToSelfRisk}</li>
                                        <li>Evidence: {dangerToSelfEvidence}</li>
                                        <li>Plan: {dangerToSelfPlan}</li>
                                    </ul>
                                </li>
                            }
                            {dangerToOthers &&
                                <li>
                                    Danger to Others
                                    <ul>
                                        <li>Risk Level: {dangerToOthersRisk}</li>
                                        <li>Evidence: {dangerToOthersEvidence}</li>
                                        <li>Plan: {dangerToOthersPlan}</li>
                                    </ul>
                                </li>
                            }
                            {otherRisk &&
                                <li>
                                    Other Risk
                                    <ul>
                                        <li>Information: {otherRiskInformation}</li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </>
                }
            </div>
            {problems &&
                <div>
                    <div>
                        <b>Problems Discussed in the meeting include: </b>
                    </div>
                    <pre style={{ width: 504, whiteSpace: "pre-wrap", overflowWrap: "break-word", fontSize: 16, fontWeight: 400, fontFamily: 'sans-serif' }}>{problems}</pre>
                </div>
            }
            {(anxietySymptoms.length || depressionSymptoms.length || ptsdSymptoms.length || otherSymptoms.length > 1 || otherSymptoms[0].length > 0) &&
                <div>
                    <b>Symptoms addressed during this meeting include: </b>
                    <ul>
                        {anxietySymptoms.length && groupSymptomsTogether ? (
                            <li>Anxiety Symptoms<ul>
                                {
                                    anxietySymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            anxietySymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                        }
                        {depressionSymptoms.length && groupSymptomsTogether ? (
                            <li>Depression Symptoms<ul>
                                {
                                    depressionSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            depressionSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                        }
                        {ptsdSymptoms.length && groupSymptomsTogether ? (
                            <li>PTSD Symptoms<ul>
                                {
                                    ptsdSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            ptsdSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                        }
                        {(otherSymptoms.length > 1 || otherSymptoms[0].length > 0) &&
                            ((otherSymptoms && groupSymptomsTogether) ? (
                                <li>Other Symptoms<ul>
                                    {
                                        otherSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                    }
                                </ul></li>
                            )
                                :
                                otherSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)

                            )}
                    </ul>
                </div>
            }
            {selfCareAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s self care.
                    {selfCareSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    <span> {otherSelfCareSymptoms} </span>
                </p>
            }
            {occupationAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s occupational functioning.
                    {occupationSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    <span> {otherOccupationSymptoms} </span>
                </p>
            }
            {academicAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s academic functioning.
                    {academicSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    <span> {otherAcademicSymptoms} </span>
                </p>
            }
            {interpersonalAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s interpersonal functioning.
                    {interpersonalSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    <span> {otherInterpersonalSymptoms} </span>
                </p>
            }
            {communitylAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s community functioning.
                    {communitySymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    <span> {otherCommunitySymptoms} </span>
                </p>
            }
            {(interventions.length > 0 || otherInterventions.length > 0) &&
                <b>In Meeting Interventions:</b>
            }
            {interventions.map(intervention => (
                <p key={intervention.text}>{replaceText(intervention.text, intervention.replacementText)}</p>)
            )
            }

            {otherInterventions.map(intervention => (
                <p key={intervention}>{intervention}</p>)
            )
            }

            {(progressions.length > 0 || otherProgressions.length > 1 || otherProgressions[0].length > 0) &&
                <b>In Meeting Progress:</b>
            }
            {progressions.map(progress => (
                <p key={progress.text}>{replaceText(progress.text, progress.replacementText)}</p>
            ))}
            {otherProgressions.map(progress => (
                <p key={progress}>{progress}</p>
            ))}
            <p><b>Recommendation For Moving Forward :</b> {recommendationForMovingForward}</p>
            {nextMeeting &&
                <p><b>Next meeting :</b> {new Date(nextMeeting).toLocaleString("en-US", { timeStyle: "full", dateStyle: "full" })}</p>
            }
            <pre style={{ width: 504, whiteSpace: "pre-wrap", overflowWrap: "break-word", fontSize: 16, fontWeight: 400, fontFamily: 'sans-serif' }}>{frequencyChangeExplanation}</pre>

        </div >
    )

}

export default observer(NoteContent)