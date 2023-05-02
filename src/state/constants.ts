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



export const possibleObjectives =
    [
        {
            text: "[CLIENT] will demonstrate a clear vision for how [ISSUE] operates in their life. We will know this has been achieved when we have observed some of the following; [CLIENT]  uses externalized language consistently in meetings, [CLIENT] has given the problem an experience near name, [CLIENT] speaks about the effects and tactics of [ISSUE], [CLIENT] speaks about their history with [ISSUE], [CLIENT] identified and speaks about people and situations that support [ISSUE], has identified and speaks about the cultural discourses that support [ISSUE], [CLIENT] can name and richly describe their values and preferences in relation to [ISSUE] and/or can identify and speak about some action they have taken to counter [ISSUE].",
            options: {
                "No Progress": {
                    text: "[CLIENT] has not progressed on this objective",
                },
                "Still Working": {
                    text: "[CLIENT] continues to work towards a clear vision for how [ISSUE] operates in their life. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] consistently speaking about [ISSUE] in externalized language during therapy meetings." },
                        { text: "[CLIENT] identifying an experience-near name for  [ISSUE]." },
                        { text: "[CLIENT] identifying and speaking about the effects and tactics of [ISSUE]." },
                        { text: "[CLIENT] speaking about their history with [ISSUE]" },
                        { text: "[CLIENT] identifying and speaking about the people and situations that support [ISSUE]" },
                        { text: "[CLIENT] identifying and speaking about the cultural discourses that support [ISSUE]" },
                        { text: "[CLIENT] identifying and speaking about  the cultural discourses that support [ISSUE]" },
                        { text: "[CLIENT] naming and richly describing their values and preferences in relation to [ISSUE] " },
                        { text: "[CLIENT] identifying and speaking about some action they have taken to counter [ISSUE]." },
                    ],
                },
                "Finished": {
                    text: "[CLIENT] has demonstrated a clear vision of how the problem operates in their life. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] consistently speaks about [ISSUE] in externalized language during therapy meetings." },
                        { text: "[CLIENT] has identified an experience-near name for the [ISSUE], [REPLACEMENT1].", prompt: "state name" },
                        { text: "[CLIENT] speaks about the effects and tactics of [ISSUE] including [REPLACEMENT1].", prompt: "name effects and tactics" },
                        { text: "[CLIENT] speaks about their past experiences with [ISSUE] including [REPLACEMENT1].", prompt: "name experiences" },
                        { text: "[CLIENT] identified and speaks about people and situations that support [ISSUE] including [REPLACEMENT1].", prompt: "name people and situations" },
                        { text: "[CLIENT] has identified and speaks about the cultural discourses that support [ISSUE] including [REPLACEMENT1].", prompt: "name discourses" },
                        { text: "[CLIENT] has named and richly described their values and preferences in relation to [ISSUE] including [REPLACEMENT1].", prompt: "name values and preferences" },
                        { text: "[CLIENT] has named and richly described actions they have taken to counter [ISSUE] including [REPLACEMENT1].", prompt: "name actions" },
                    ],
                }
            },
        },
        {
            text: "[CLIENT] will develop a vision, or preferred narrative, for their life that has reduced the presence or role of [ISSUE]. We will know that this has been achieved when we have observed some of the following;  [CLIENT] speaks richly about times when the problem has less influence, [CLIENT] identifies actions they have taken that fit with their preferred narrative, [CLIENT]  identifies different situations and people who will support their preferred narrative, [CLIENT] identifies past experiences that fit with their preferred narrative, [CLIENT]  has considered how their preferred narrative fits with their cultural context, [CLIENT] will have developed and practiced strategies to counter [ISSUE].",
            options: {
                "No Progress": {
                    text: "[CLIENT] has not progressed on this objective",
                },
                "Still Working": {
                    text: "[CLIENT] continues to work towards developing a preferred narrative for their life that reduces the presence and or role of [ISSUE]. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] speaking richly about times when the problem has less influence." },
                        { text: "[CLIENT] identifying actions they have taken that fit with their preferred narrative." },
                        { text: "[CLIENT] identifying different situations and people who will support their preferred narrative." },
                        { text: "[CLIENT] identifying past experiences that support their preferred narrative." },
                        { text: "[CLIENT]  considering how their preferred narrative fits with their cultural context." },
                        { text: "[CLIENT] developing and practicing strategies to counter [ISSUE]." },

                    ],
                },
                "Finished": {
                    text: "A[CLIENT] has developed a preferred narrative for their life that has reduced the presence and/or role of [ISSUE]. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] speaks richly about times when the problem has less influence including [REPLACEMENT1].", prompt: "name experiences" },
                        { text: "[CLIENT] identifies actions they have taken that support their preferred narrative including [REPLACEMENT1].", prompt: "name actions" },
                        { text: "[CLIENT]  identifies different situations and/or people who will support their preferred narrative including [REPLACEMENT1].", prompt: "name situations or people" },
                        { text: "[CLIENT] identified past experiences including [REPLACEMENT1] that support their preferred narrative.", prompt: "name past experiences" },
                        { text: "[CLIENT]  has considered how their preferred narrative fits their cultural context." },
                        { text: "[CLIENT] will have developed and practiced strategies to counter [ISSUE] including [REPLACEMENT1]", prompt: "name strategies" },
                    ],
                },
            }
        },
        {
            text: "[CLIENT] will maintain a connection with their preferred narrative that reduces the presence and/or role of the [ISSUE] in their life. We will know that this has been achieved when we have observed some of the following; [CLIENT] consistently uses their strategies for countering [ISSUE], [CLIENT] regularly reports in meetings about how they have countered [ISSUE], [CLIENT] reports they have recruited people to support their preferred narrative, [ISSUE] takes up less space in meetings, [CLIENT] speaks about themselves through the lens of their preferred story (as appose to the lens of [ISSUE]).",
            options: {
                "No Progress": {
                    text: "[CLIENT] has not progressed on this objective",
                },
                "Still Working": {
                    text: "[CLIENT] continues to work towards maintaining a connection with their preferred narrative that decreases the presence and/or role of the [ISSUE] in their life. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] developing effective strategies for countering [ISSUE]." },
                        { text: "[CLIENT] regularly reports countering  [ISSUE] in meetings." },
                        { text: "[CLIENT] recruiting people to support their preferred narrative." },
                        { text: "[ISSUE] taking up less space in meetings." },
                        { text: "[CLIENT] speaks about themselves through the lens of their preferred story" },
                    ],
                },
                "Finished": {
                    text: "All that stuff",
                    progressions: [
                        { text: "[CLIENT] has developed effective strategies for countering [ISSUE] including [REPLACEMENT1] and uses them consistently.", prompt: "name strategies" },
                        { text: "[CLIENT] richly describes a preferred narrative incorporating their stated values and preferences." },
                        { text: "[CLIENT] regularly reports in meetings about how they have countered [ISSUE]." },
                        { text: "[CLIENT] reports they have recruited people to support their preferred narrative including [REPLACEMENT1].", prompt: "name people" },
                        { text: "[ISSUE] takes up less space in meetings and is replaced by accounts of living their preferred story. " },
                        { text: "[CLIENT] speaks about themselves through the lens of their preferred story. " },
                    ],
                },
            }
        }
    ]

export type PossibleObjective = typeof possibleObjectives[number]



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
        text: "Change the relationship with [ISSUE] to reduce the frequency, intensity and duration of its effects so that [REPLACEMENT1].",
        prompt: ["[specify how functioning will be no longer/less impaired]"]
    },
    {
        text: " Change [Reduce/Increase] frequency of [REPLACEMENT1] in relation to [REPLACEMENT2]",
        prompt: [
            "[specific symptom of diagnosis]",
            "[specify how function will be no longer/less impaired]",
        ]
    },
]

export type PossibleGoal = typeof possibleGoals[number]


export const possibleProgressions = [
    { text: "[CLIENT] consistently speaks about [ISSUE] in externalized language during therapy meetings." },
    {
        text: "[CLIENT] identified and verbalized an experience near name for the problem, [REPLACEMENT1].",
        prompt: "[state name]",
    },
    {
        text: "[CLIENT] identified and verbalized effects of [ISSUE] including [REPLACEMENT1].",
        prompt: "[list effects identified]",
    },
    {
        text: "[CLIENT] identified and verbalized tactics used by [ISSUE] including [REPLACEMENT1].",
        prompt: "[list tactics identified]"
    },
    {
        text: "[CLIENT] developed and practiced strategies that counter the effects and tactics of [ISSUE] including [REPLACEMENT1].",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support or sustain the problematic relationship with [ISSUE] including [REPLACEMENT1].",
        prompt: "[name experiences]",
    },
    {
        text: "[CLIENT] identified and verbalized cultural discourses that support and sustain their relationship with [ISSUE] including [REPLACEMENT1].",
        prompt: "[name discourses]",
    },
    {
        text: "[CLIENT] identified and verbalized a rich description of their values/preferences in relationship to [ISSUE] including [REPLACEMENT1].",
        prompt: "[name values/preferences]",
    },
    { text: "[CLIENT] named and richly described a re-authored preferred narrative that supports their stated values/preferences and does not support [ISSUE]’s narrative." },
    {
        text: "[CLIENT] identified and verbalized actions they have taken to support their preferred narrative including  [REPLACEMENT1].",
        prompt: "[list actions]",
    },
    {
        text: "[CLIENT] identified [REPLACEMENT1] as a person who will support their preferred narrative.",
        prompt: "[name person]",
    },
    {
        text: "[CLIENT]  connected with [REPLACEMENT1] to help support their preferred narrative.",
        prompt: "[name person]."
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support their preferred narrative including [REPLACEMENT1].",
        prompt: "[list experiences]",
    },
    {
        text: "[CLIENT] identified and verbalized situations that support their preferred narrative including [REPLACEMENT1].",
        prompt: "[list situations]",
    },
    {
        text: "[CLIENT] identified and verbalized cultural discourses that support their preferred narrative including [REPLACEMENT1].",
        prompt: "[list discourses]",
    },
    {
        text: "[CLIENT] learned and implemented behavioral strategies to exert acute control over relationship with [ISSUE] including [REPLACEMENT1].",
        prompt: "[list strategies].",
    },
    {
        text: "[CLIENT] reported connection to their preferred stories as a means to decrease the [ISSUE]’s influence.",
    },
]

export type PossibleProgression = typeof possibleProgressions[number]



export const possibleInterventions = [
    { text: "Use and promote externalized language to give [CLIENT] space to take a position on their relationship with [ISSUE]." },
    { text: "Use deconstruction questions to help [CLIENT] identify an experience near name for the problem." },
    { text: "Use deconstruction questions to help [CLIENT] identify the effects of [ISSUE]." },
    { text: "Use deconstruction questions to help [CLIENT] identify the tactics used by [ISSUE]." },
    { text: "Use deconstruction questions to help [CLIENT] evaluate their stance on the problems' effects in their life." },
    { text: "Use deconstruction questions to help [CLIENT] explore the history of their relationship with [ISSUE]." },
    { text: "Invite [CLIENT] to take a stance on their relationship with [ISSUE]. Use deconstruction questions to help them richly describe their values/ preferences that justify their stance." },
    { text: "Use deconstruction questions to help  [CLIENT] identify cultural discourse and societal norms that may support the  [ISSUE]." },
    { text: "Use Narrative practice of double listening to identify unique outcomes,  situations, events, and circumstances free from [ISSUE]’s influence." },
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
        text: "Work with [CLIENT] to develop a concrete preferred action plan in relation to [REPLACEMENT1].",
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
            initiatedAt: new Date(),
            estimatedCompletionDate: new Date((new Date()).setMonth((new Date()).getMonth() + 6)),
        },
        goal2: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [],
            active: false,
            initiatedAt: new Date(),
            estimatedCompletionDate: new Date((new Date()).setMonth((new Date()).getMonth() + 6)),
        },
        goal3: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [],
            active: false,
            initiatedAt: new Date(),
            estimatedCompletionDate: new Date((new Date()).setMonth((new Date()).getMonth() + 6)),
        },
    },
    currentTab: "/meeting-logstics",
}