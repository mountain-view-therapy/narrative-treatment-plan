export const locationCodes = ["Home (Loc Code 10)", "Other (Loc Code 02)"]
export type LocationCode = typeof locationCodes[number]

export const possibleCptCodes = [
    "90791 Diagnostic (50+ min)",
    "90832 Individual (17-37 min)",
    "90834 Individual (38-52 min)",
    "90837 Individual (53+ min)",
    "90847 Couples/Family with client present (45+ min)",
    "90846 Family without client present (45+ min)",
    "1111 Narrative Consulting (45 min)",
    "Other",
]
export type PossibleCptCode = typeof possibleCptCodes[number]


export const cognitiveFunctioningStates = [
    "Oriented / Alert",
    "Disorganized",
    "Tangential",
    "Preoccupied",
    "Circumstantial",
    "Not Assessed",
]
export type CognitiveFunctioningState = typeof cognitiveFunctioningStates[number]


export const affectStates = [
    "Appropriate",
    "Inappropriate",
    "Labile",
    "Constricted",
    "Blunted",
    "Flat",
    "Not Assessed",
]
export type AffectStates = typeof affectStates[number]

export const moodStates = [
    "Euthymic",
    "Depressed",
    "Dysphoric",
    "Anxious",
    "Angry",
    "Euphoric",
    "Not Assessed"
]
export type MoodStates = typeof moodStates[number]


export const interpersonalStates = [
    "Interactive",
    "Intermittently Interactive",
    "Guarded",
    "Withdrawn",
    "Hostile",
    "Not Assessed",
]
export type InterpersonalStates = typeof interpersonalStates[number]

export const functionalStatusStates = [
    "Intact",
    "Impaired",
    "Variably Impaired",
    "Not Assessed",
]
export type FunctionalStatusStates = typeof interpersonalStates[number]

export const riskLevels = [
    "Low",
    "Medium",
    "High",
]
export type RiskLevels = typeof riskLevels[number]


export const possibleAnxietySymptoms = [
    "excessive worry that is difficult to control",
    "constantly feeling on edge",
    "restlessness",
    "racing thoughts",
    "insomnia",
    "shortness of breath",
    "heart palpitations",
    "dry mouth",
    "difficulty concentrating",
    "trouble falling asleep",
    "trouble staying asleep",
    "general state of irritability",
]
export type PossibleAnxietySymptom = typeof possibleAnxietySymptoms[number]

export const possibleDepressionSymptoms = [
    "depressed mood",
    "irritable mood",
    "diminished interest or enjoyment in activities",
    "sleeplessness",
    "hypersomnia",
    "fatigue/lack of energy",
    "difficulty thinking or concentrating",
    "indecisiveness",
    "social withdrawal",
    "feelings of hopelessness and worthlessness",
    "feelings of inappropriate guilt",
    "lack of appetite",
    "recurrent suicidal ideation",
]
export type PossibleDepressionSymptom = typeof possibleDepressionSymptoms[number]

export const possiblePTSDSymptoms = [
    "intrusive thoughts or memories of the traumatic event",
    "difficulty sleeping",
    "nightmares",
    "flashbacks",
    "hypervigilance",
    "difficulty concentrating",
    "avoidance of reminders of the traumatic event",
    "being easily startled",
    "feelings of guilt/shame",
    "feelings of hopelessness",
    "intense distress when exposed to reminders of the traumatic event",
]
export type PossiblePTSDSymptom = typeof possiblePTSDSymptoms[number]

export const possibleSelfCareSymptoms = [
    " is getting inadequate sleep, only 5 hours per night",
    " is only eating 1 meal per day",
    " is only showering twice a week when they\"d prefer to shower daily",
]
export type PossibleSelfCareSymptom = typeof possibleSelfCareSymptoms[number]


export const possibleOccupationSymptoms = [
    " is getting in frequent arguments with coworkers",
    " is frequently late to work",
    " frequently misses work",
    " has received a written warning at work",
    " is at risk of losing job",
]
export type PossibleOccupationSymptom = typeof possibleOccupationSymptoms[number]


export const possibleAcademicSymptoms = [
    " frequently arrives late to school",
    " frequently misses school",
    " lack of school attendance is negatively affecting grades",
    " unable to keep up with coursework",
    " is engaged in fights at school every month",
]
export type PossibleAcademicSymptom = typeof possibleAcademicSymptoms[number]

export const possibleInterpersonalSymptoms = [
    " is getting in frequent arguments with partner",
    " has frequent arguments with family members",
    " has frequent arguments with friends",
    " is unable to partake in family obligations",
]
export type PossibleInterpersonalSymptom = typeof possibleInterpersonalSymptoms[number]

export const possibleCommunitySymptoms = [
    " has been unable to attend community functions",
    " has been unable to fulfill community obligations",
]
export type PossibleCommunitySymptom = typeof possibleCommunitySymptoms[number]

export const possibleInterventions = [
    { text: "Used/promoted externalized language to give [CLIENT] space to take a position on their relationship with [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] name the problem, [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] identify the effects of [PROBLEM]."},
    { text: "Used deconstruction questions to help [CLIENT] identify the tactics of [PROBLEM]."},
    { text: "Helped [CLIENT] develop and practice strategies to counter the effects and tactics of  [PROBLEM]."},
    { text: "Used deconstruction questions to help [CLIENT] explore the history of their relationship with [PROBLEM]."},
    { text: "Invited [CLIENT] to take a stance on their relationship with [PROBLEM]. Used deconstruction questions to help them richly describe their values/ preferences that  justify their stance."},
    { text: "Helped  [CLIENT] identify cultural discourse and societal norms thay may be supporting the  [PROBLEM]."},
    { text: "Used Narrative practice of double listening to identify unique outcomes invite [CLIENT] to richly describe situation where  [PROBLEM] has less influence. "},
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT]  into preferred story development."},
    { text: "Used deconstruction questions to help [CLIENT] explore the history of their relationship with [PROBLEM]."},
    {
        text: "Used Narrative practice of Re-Authoring to Identify name for preferred story/project, [REPLACEMENT].",
        prompt: "[key word or phrase for emerging preferred story]",
    },
    { text: "Used Narrative practice of Re-Authoring to invite  [CLIENT] to identify their actions that support their preferred story."},
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] to identify people that support their preferred story including."},
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] to identify past experiences that fit with their preferred story."},
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] to identify situations that support their preferred story."},
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] to identify cultural discourse that support their preferred story."},
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] to making meaning of their life through the lens of their preferred story"},
    {
        text: "Used Narrative practice of Re-membering Conversations to invoke the presences/memory of [REPLACEMENT] to thicken alternative/preferred story.",
        prompt: "[name person “re-membered”]",
    },
    { text: "Referred [CLIENT] to physician for medical evaluation. " },
    { text: "Referred to resources to learn meditation/mindfulness. Incorporated the use of these skills in alternative/preferred story development." },
    {
        text: "Work with [CLIENT] to develop a concrete preferred action plan in relation to [REPLACEMENT].",
        prompt: "[name activities of daily living ex. eating, sleeping, exercise]"
    },
    { text: "Reviewed intake paperwork, explained practice policies, HIPAA privacy policies, and patient rights, and obtained informed consent for therapy." },
    { text: "Reviewed Clinical Formulation" },
    { text: "Reviewed Treatment Plan" },
    { text: "Reviewed intake questionnaire" },
]

export const possibleProgressions = [
    {text: "[CLIENT] consistently speaks about [PROBLEM] in externalized language during therapy meetings.",},    
    {
        text: "[CLIENT] identified and verbalized an experience near name for the problem, [REPLACEMENT].",
        prompt: "[state name]",
    },
    {
        text: "[CLIENT] identified and verbalized effects of [PROBLEM] including [REPLACEMENT].",
        prompt: "[list effects identified]",
    },
    {
        text: "[CLIENT] identified and verbalized tactics used by [PROBLEM] including [REPLACEMENT].",
        prompt: "[list tactics identified]"
    },
    {
        text: "[CLIENT] developed and practiced strategies that counter the effects and tactics of [PROBLEM] including [REPLACEMENT].",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT].",
        prompt: "[name experiences]",
    },
    {
        text: "[CLIENT] identified and verbalized cultural discourses that support and sustain their relationship with [PROBLEM] including [REPLACEMENT].",
        prompt: "[name discourses]",
    },
    {
        text: "[CLIENT] identified and verbalized a rich description of their values/preferences in relationship to [PROBLEM] including [REPLACEMENT].",
        prompt: "[name values/preferences]",
    },
    {   text: "[CLIENT] named and richly described a re-authored preferred narrative that supports their stated values/preferences and does not support [PROBLEM]’s narrative."},
    {
        text: "[CLIENT] identified and verbalized actions they have taken to support their preferred narrative including  [REPLACEMENT].",
        prompt: "[list actions]",
    },
     {
        text: "[CLIENT] identified [REPLACEMENT] as a person who will support their preferred narrative.",
        prompt: "[name person]",
    },
    {
        text: "[CLIENT]  connected with [REPLACEMENT] to help support their preferred narrative.",
        prompt: "[name person]."
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support their preferred narrative including [REPLACEMENT].",
        prompt: "[list experiences]",
    },
    {
        text: "[CLIENT] identified and verbalized situations that support their preferred narrative including [REPLACEMENT].",
        prompt: "[list situations]",
    },
    {
        text: "[CLIENT] identified and verbalized cultural discourses that support their preferred narrative including [REPLACEMENT].",
        prompt: "[list discourses]",
    },
    {
        text: "[CLIENT] learned and implemented behavioral strategies to exert acute control over relationship with [PROBLEM] including [REPLACEMENT].",
        prompt: "[list strategies].",
    },
    {
        text: "[CLIENT] reported connection to their preferred stories as a means to decrease the [PROBLEM]’s influence.",
    },
    
]


export const possibleRecommendationsForMovingForward = [
    "N/A-This is the initial diagnostic meeting",
    "Continue with current treatment plan",
    "Update treatment plan",
    "Discontinue therapy",
]
export type PossibleRecommendationsForMovingForward = typeof possibleRecommendationsForMovingForward[number]


export const initialState = {
    meetingInformation: {
        meetingLogistics: {
            clientInitials: "",
            telehealthPlatform: "Simple Practice",
            telehealthAppropriate: "Yes",
            telehealthConsent: "Yes",
            otherAddress: "",
            startTime: "",
            endTime: "",
            cptCode: "90837 Individual (53+ min)",
            otherCptCode: "",
            clientPresent: true,
            spousePresent: false,
            partnerPresent: false,
            parentPresent: false,
            siblingPresent: false,
            childPresent: false,
            otherPresent: false,
            spouseName: "",
            partnerName: "",
            parentName: "",
            siblingName: "",
            childName: "",
            otherName: "",
        },
        mentalStatusExam: {
            cognitiveFunctioning: "Oriented / Alert",
            affect: "Appropriate",
            mood: "Euthymic",
            interpersonal: "Interactive",
            functionalStatus: "Intact",
            noRisk: false,
            dangerToSelf: false,
            dangerToOthers: false,
            otherRisk: false,
            dangerToSelfRisk: "Low",
            dangerToOthersRisk: "Low",
            dangerToSelfEvidence: "",
            dangerToOthersEvidence: "",
            dangerToSelfPlan: "",
            dangerToOthersPlan: "",
            otherRiskInformation: "",
        },
        problems: "",
        symptoms: {
            anxietySymptoms: [],
            depressionSymptoms: [],
            ptsdSymptoms: [],
            otherSymptoms: [""],
            groupSymptomsTogether: false,
            selfCareAffected: false,
            selfCareSymptoms: [],
            otherSelfCareSymptoms: "",
            occupationAffected: false,
            occupationSymptoms: [],
            otherOccupationSymptoms: "",
            academicAffected: false,
            academicSymptoms: [],
            otherAcademicSymptoms: "",
            interpersonalAffected: false,
            interpersonalSymptoms: [],
            otherInterpersonalSymptoms: "",
            communitylAffected: false,
            communitySymptoms: [],
            otherCommunitySymptoms: "",
        },
        identifiedProblem: "",
        recommendationForMovingForward: "Continue with current treatment plan",
        frequencyChangeExplanation: "",
        nextMeeting:"",
        otherInterventions: [""],
        otherProgressions: [""],

    },
    currentTab: "/meeting-logstics",
}