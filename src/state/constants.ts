export const locationCodes = ["Home (Loc Code 10)", "Other (Loc Code 02)"]
export type LocationCode = typeof locationCodes[number]

export const modalities = [
    "Individual",
    "Couples/Relationship",
    "Family",
    "Group",
]
export type Modalities = typeof modalities[number]


export const frequency = [
    "Weekly",
    "Every other week",
    "Monthly",
    "Other",
]
export type Frequency = typeof frequency[number]


export const length = [
    "3 Months",
    "6 Months",
    "12 Month",
    "Other",
]
export type Length = typeof length[number]

export const possibleDiagnosis = [
    "F41.1 Generalized Anxiety Disorder",
    "F33.1 Major Depressive Disorder, recurrent, moderate",
    "F43.10 Posttraumatic Stress Disorder",
    "Other",
]
export type PossibleDiagnosis = typeof possibleDiagnosis[number]

export const possibleSymptoms = {
    "F41.1 Generalized Anxiety Disorder": [
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
    ],

    "F33.1 Major Depressive Disorder, recurrent, moderate": [
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
    ],
    "F43.10 Posttraumatic Stress Disorder": [
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
    ],
}
export const possibleEffectsOnFunctions = {
    "selfCare": [
        "[CLIENT] is getting inadequate sleep, only 5 hours per night",
        "[CLIENT] is only eating 1 meal per day",
        "[CLIENT] is only showering twice a week when they'd prefer to shower daily",
    ],
    "occupation": [
        "[CLIENT] is getting in frequent arguments with coworkers",
        "[CLIENT] is frequently late to work",
        "[CLIENT] frequently misses work",
        "[CLIENT] has received a written warning at work",
        "[CLIENT] is at risk of losing job",
    ],
    "academic": [
        "[CLIENT] frequently arrives late to school",
        "[CLIENT] frequently misses school",
        "[CLIENT] lack of school attendance is negatively affecting grades",
        "[CLIENT] unable to keep up with coursework",
        "[CLIENT] is engaged in fights at school every month",
    ],
    "interpersonal": [
        "[CLIENT] is getting in frequent arguments with partner",
        "[CLIENT] has frequent arguments with family members",
        "[CLIENT] has frequent arguments with friends",
        "[CLIENT] is unable to partake in family obligations",
    ],
    "community": [
        "[CLIENT] has been unable to attend community functions",
        "[CLIENT] has been unable to fulfill community obligations",
    ],
}

const objectives = {
    objective1: {
        text: "",
        options: {
            "No Progress": [],
            "Still Working:": [
                { text: "whatever [REPLACE ME}", prompt: "PROMPT TEXT" },
                { text: "whatever [REPLACE ME}", prompt: "PROMPT TEXT" },
                { text: "whatever [REPLACE ME}", prompt: "PROMPT TEXT" },
            ],
            "Finished": ["finished1", "finished2", "finished3"],
        }
    },
    objective2: {
        text: "",
        options: {
            "No Progress": [],
            "Still Working:": [
                { text: "whatever [REPLACE ME}", prompt: "PROMPT TEXT" },
                { text: "whatever [REPLACE ME}", prompt: "PROMPT TEXT" },
                { text: "whatever [REPLACE ME}", prompt: "PROMPT TEXT" },
            ],
            "Finished": ["finished1", "finished2", "finished3"],
        }
    },

}


export type PossibleAnxietySymptom = typeof possibleSymptoms["F41.1 Generalized Anxiety Disorder"][number]
export type PossibleDepressionSymptom = typeof possibleSymptoms["F33.1 Major Depressive Disorder, recurrent, moderate"][number]
export type PossiblePTSDSymptom = typeof possibleSymptoms["F43.10 Posttraumatic Stress Disorder"][number]
export type PossibleSymptom = PossibleAnxietySymptom | PossibleDepressionSymptom | PossiblePTSDSymptom


export type PossibleEffectOnSelfCare = typeof possibleEffectsOnFunctions["selfCare"][number]
export type PossibleEffectOnOccupation = typeof possibleEffectsOnFunctions["occupation"][number]
export type PossibleEffectOnAcademic = typeof possibleEffectsOnFunctions["academic"][number]
export type PossibleEffectOnInterpersonal = typeof possibleEffectsOnFunctions["interpersonal"][number]
export type PossibleEffectOnCommunity = typeof possibleEffectsOnFunctions["community"][number]
export type PossibleEffectsOnFunctions = PossibleEffectOnSelfCare
    | PossibleEffectOnOccupation
    | PossibleEffectOnAcademic
    | PossibleEffectOnInterpersonal
    | PossibleEffectOnCommunity

export const possibleGoals = [
    {
        text: "Change the relationship with [ISSUE] to reduce the frequency, intensity and duration of its effects so that [REPLACEMENT].",
        prompt: "[specify how functioning will be no longer/less impaired]"
    },
    {
        text: "[Reduce/Increase] frequency of [REPLACEMENT] in relation to [ISSUE]",
        prompt: [
            "[specific symptom of diagnosis]",
            "[are of functioning]",
        ]
    },
]

export const possibleProgressions = [
    { text: "[CLIENT] consistently speaks about [PROBLEM] in externalized language during therapy meetings." },
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
    { text: "[CLIENT] named and richly described a re-authored preferred narrative that supports their stated values/preferences and does not support [PROBLEM]’s narrative." },
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


export const possibleInterventions = [
    { text: "Use and promote externalized language to give [CLIENT] space to take a position on their relationship with [PROBLEM]." },
    { text: "Use deconstruction questions to help [CLIENT] identify an experience near name for the problem." },
    { text: "Use deconstruction questions to help [CLIENT] identify the effects of [PROBLEM]." },
    { text: "Use deconstruction questions to help [CLIENT] identify the tactics used by [PROBLEM]." },
    { text: "Use deconstruction questions to help [CLIENT] evaluate their stance on the problems' effects in their life." },
    { text: "Use deconstruction questions to help [CLIENT] explore the history of their relationship with [PROBLEM]." },
    { text: "Invite [CLIENT] to take a stance on their relationship with [PROBLEM]. Use deconstruction questions to help them richly describe their values/ preferences that justify their stance." },
    { text: "Use deconstruction questions to help  [CLIENT] identify cultural discourse and societal norms that may support the  [PROBLEM]." },
    { text: "Use Narrative practice of double listening to identify unique outcomes,  situations, events, and circumstances free from [PROBLEM]’s influence." },
    { text: "Use Narrative practice of Re-Authoring to invite [CLIENT] into preferred story development." },
    { text: "Use Narrative practice of Re-Authoring to help [CLIENT] develop a name for their preferred story." },
    { text: "Use Narrative practice of Re-Authoring to help [CLIENT] identify actions that support their preferred story." },
    { text: "Use Narrative practice of Re-Authoring to help  [CLIENT] identify situations that support their preferred story." },
    { text: "Use Narrative practice of Re-Authoring to help  [CLIENT] identified cultural contexts that support their preferred story." },
    { text: "Use Narrative practice of Re-Authoring to invite [CLIENT]  to making meaning of their life through the lens of their preferred story" },
    { text: "Use Narrative practice of Re-membering to help [CLIENT] to identify people that support their preferred story." },
    { text: "Use Narrative practice of Re-membering Conversations to invoke the presence/memory of someone to thicken alternative/preferred story." },
    { text: "Refer [CLIENT] to physician for medical evaluation. " },
    { text: "Refer to resources to learn meditation/mindfulness. Incorporated the use of these skills in alternative/preferred story development." },
    {
        text: "Work with [CLIENT] to develop a concrete preferred action plan in relation to [REPLACEMENT].",
        prompt: "[name activities of daily living ex. eating, sleeping, exercise]"
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
    treatmentPlan: {
        meetingLogistics: {
            clientInitials: "",
            firstDateOfService: new Date(),
            modalityPlanned: modalities[0],
            meetingFrequency: frequency[0],
            treatmentLength: length[0],
            otherTreatmentLength: "",
            otherMeetingFrequency: "",
        },
        diagnostics: {
            diagnoses: [],

            anxietySymptoms: [],
            depressionSymptoms: [],
            ptsdSymptoms: [],
            otherSymptoms: [],
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
        functioning: {
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

        problems: "",
        identifiedProblem: "",
        recommendationForMovingForward: "Continue with current treatment plan",
        frequencyChangeExplanation: "",
        nextMeeting: "",
        otherInterventions: [""],
        otherProgressions: [""],
        goal1: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [],
            active: true,
        },
        goal2: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [],
            active: false,
        },
        goal3: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [],
            active: false,
        },


    },
    currentTab: "/meeting-logstics",
}