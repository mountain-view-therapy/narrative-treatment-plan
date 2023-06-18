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
            title: "[CLIENT] will demonstrate a clear vision for how [ISSUE] operates in their life. We will know this has been achieved when we have observed some of the following:",
            objectiveText: [
                "[CLIENT] uses externalized language consistently in meetings",
                "[CLIENT] has given the problem an experience near name",
                "[CLIENT] describes the effects and tactics of [ISSUE]",
                "[CLIENT] describes their history with [ISSUE]",
                "[CLIENT] has identified and described their connection to people and situations that support [ISSUE]",
                "[CLIENT] has identified and described cultural discourses that support [ISSUE]",
                "[CLIENT] can name and richly describe their values and preferences in relation to [ISSUE] and/or can describe some action they have taken to counter [ISSUE].",
            ],
            options: {
                "No Progress": {
                    text: "[CLIENT] has not yet demonstrated a clean vision on how the [ISSUE] operates in their life",
                },
                "Still Working": {
                    text: "[CLIENT] continues to work towards a clear vision for how [ISSUE] operates in their life. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] consistently speaks about [ISSUE] in externalized language during therapy meetings." },
                        { text: "[CLIENT] has identified an experience-near name for the [ISSUE], [REPLACEMENT1].", prompt: "state name" },
                        { text: "[CLIENT] has richly described the effects and tactics of [ISSUE] including [REPLACEMENT1].", prompt: "name effects and tactics" },
                        { text: "[CLIENT] has richly described their past experiences with [ISSUE] including [REPLACEMENT1].", prompt: "name experiences" },
                        { text: "[CLIENT] has richly described situations that support [ISSUE] including [REPLACEMENT1].", prompt: "name situations" },
                        { text: "[CLIENT] identified people that support [ISSUE] including [REPLACEMENT1].", prompt: "name people" },
                        { text: "[CLIENT] has described cultural discourses that support [ISSUE] including [REPLACEMENT1].", prompt: "name discourses" },
                        { text: "[CLIENT] has named and richly described their values and preferences in relation to [ISSUE] including [REPLACEMENT1].", prompt: "name values and preferences" },
                        { text: "[CLIENT] has richly described actions they have taken to counter [ISSUE] including [REPLACEMENT1].", prompt: "name actions" },
                    ],
                },
                "Finished": {
                    text: "[CLIENT] has demonstrated a clear vision of how the problem operates in their life. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] consistently speaks about [ISSUE] in externalized language during therapy meetings." },
                        { text: "[CLIENT] has identified an experience-near name for the [ISSUE], [REPLACEMENT1].", prompt: "state name" },
                        { text: "[CLIENT] has richly described the effects and tactics of [ISSUE] including [REPLACEMENT1].", prompt: "name effects and tactics" },
                        { text: "[CLIENT] has richly described their past experiences with [ISSUE] including [REPLACEMENT1].", prompt: "name experiences" },
                        { text: "[CLIENT] has richly described situations that support [ISSUE] including [REPLACEMENT1].", prompt: "name situations" },
                        { text: "[CLIENT] identified people that support [ISSUE] including [REPLACEMENT1].", prompt: "name people" },
                        { text: "[CLIENT] has described cultural discourses that support [ISSUE] including [REPLACEMENT1].", prompt: "name discourses" },
                        { text: "[CLIENT] has named and richly described their values and preferences in relation to [ISSUE] including [REPLACEMENT1].", prompt: "name values and preferences" },
                        { text: "[CLIENT] has richly described actions they have taken to counter [ISSUE] including [REPLACEMENT1].", prompt: "name actions" },                    ],
                }
            },
        },
        {
            title: "[CLIENT] will develop a vision, or preferred narrative, for their life that has reduced the presence or role of [ISSUE]. We will know that this has been achieved when we have observed some of the following:",
            objectiveText: [
                "[CLIENT] can richly describe times when [ISSUE] has less influence",
                "[CLIENT] identifies actions they have taken that fit with their preferred narrative",
                "[CLIENT] identifies different situations and people who will support their preferred narrative",
                "[CLIENT] identifies past experiences that fit with their preferred narrative",
                "[CLIENT] has considered how their preferred narrative fits with their cultural context",
                "[CLIENT] will have developed and practiced strategies to counter [ISSUE].",
            ],
            options: {
                "No Progress": {
                    text: "[CLIENT] has not yet developed a vision, or preferred narrative, for their life that has reduced the presence or role of [ISSUE].",
                },
                "Still Working": {
                    text: "[CLIENT] continues to work towards developing a preferred narrative for their life that reduces the presence and or role of [ISSUE]. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] has richly describe times when the problem has less influence including [REPLACEMENT1].", prompt: "name experiences" },
                        { text: "[CLIENT] has identified actions they have taken that support their preferred narrative including [REPLACEMENT1].", prompt: "name actions" },
                        { text: "[CLIENT] has identified different situations and/or people who will support their preferred narrative including [REPLACEMENT1].", prompt: "name situations or people" },
                        { text: "[CLIENT] identified past experiences including [REPLACEMENT1] that support their preferred narrative.", prompt: "name past experiences" },
                        { text: "[CLIENT] has considered how their preferred narrative fits their cultural context." },
                        { text: "[CLIENT] has developed and practiced strategies to counter [ISSUE] including [REPLACEMENT1].", prompt: "name strategies" },

                    ],
                },
                "Finished": {
                    text: "[CLIENT] has developed a preferred narrative for their life that has reduced the presence and/or role of [ISSUE]. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] has richly describe times when the problem has less influence including [REPLACEMENT1].", prompt: "name experiences" },
                        { text: "[CLIENT] has identified actions they have taken that support their preferred narrative including [REPLACEMENT1].", prompt: "name actions" },
                        { text: "[CLIENT] has identified different situations and/or people who will support their preferred narrative including [REPLACEMENT1].", prompt: "name situations or people" },
                        { text: "[CLIENT] identified past experiences including [REPLACEMENT1] that support their preferred narrative.", prompt: "name past experiences" },
                        { text: "[CLIENT] has considered how their preferred narrative fits their cultural context." },
                        { text: "[CLIENT] has developed and practiced strategies to counter [ISSUE] including [REPLACEMENT1].", prompt: "name strategies" },
                    ],
                },
            }
        },
        {
            title: "[CLIENT] will maintain a connection with their preferred narrative that reduces the presence and/or role of the [ISSUE] in their life. We will know that this has been achieved when we have observed some of the following:",
            objectiveText: [
                "[CLIENT] will consistently use their strategies for countering [ISSUE]",
                "[CLIENT] will regularly report in meetings about how they have countered [ISSUE]",
                "[CLIENT] will report they have recruited people to support their preferred narrative",
                "[ISSUE] will take up less space in meetings and is replaced by accounts of living their preferred story",
                "[CLIENT] describes themselves through the lens of their preferred story (as opposed to the lens of [ISSUE]).",
            ],
            options: {
                "No Progress": {
                    text: "[CLIENT] has not yet demonstrated a maintained connection with their preferred story.",
                },
                "Still Working": {
                    text: "[CLIENT] continues to work towards maintaining a connection with their preferred narrative that decreases the presence and/or role of the [ISSUE] in their life. The following has been observed:",
                    progressions: [
                        { text: "[CLIENT] consistently uses their strategies for countering [ISSUE] including [REPLACEMENT1].", prompt: "name strategies" },
                        { text: "[CLIENT] regularly reports in meetings about how they have countered [ISSUE]." },
                        { text: "[CLIENT] has reported they have recruited people to support their preferred narrative." },
                        { text: "[CLIENT] reports they have recruited people to support their preferred narrative including [REPLACEMENT1].", prompt: "name people" },
                        { text: "[ISSUE] takes up less space in meetings and is replaced by accounts of living their preferred story." },
                        { text: "[CLIENT] describes themselves through the lens of their preferred story (as opposed to the lens of [ISSUE])." },
                    ],
                },
                "Finished": {
                    text: " [CLIENT] maintains a connection with their preferred narrative that reduces the presence and/or role of the [ISSUE] in their life. The following has been observed",
                    progressions: [
                        { text: "[CLIENT] consistently uses their strategies for countering [ISSUE] including [REPLACEMENT1].", prompt: "name strategies" },
                        { text: "[CLIENT] regularly reports in meetings about how they have countered [ISSUE]." },
                        { text: "[CLIENT] has reported they have recruited people to support their preferred narrative." },
                        { text: "[CLIENT] reports they have recruited people to support their preferred narrative including [REPLACEMENT1].", prompt: "name people" },
                        { text: "[ISSUE] takes up less space in meetings and is replaced by accounts of living their preferred story." },
                        { text: "[CLIENT] describes themselves through the lens of their preferred story (as opposed to the lens of [ISSUE])." },
                    ],
                },
            }
        }
    ]

export type PossibleObjective = typeof possibleObjectives[number]
export type PossibleProgression = typeof possibleObjectives[number]["options"]["Still Working"]["progressions"][number] | typeof possibleObjectives[number]["options"]["Finished"]["progressions"][number]


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
        text: "Change the relationship with [ISSUE] to reduce the frequency, intensity and duration of its effects in relation to [REPLACEMENT1] so that [REPLACEMENT2].",
        prompt: [
            "specify where issue effects persons life: work, community, personal relationships",
            "how would person served see their life improved",
        ]
    },
    {
        text: " [REPLACEMENT1] [REPLACEMENT2] of [ISSUE] in relation to [REPLACEMENT3] so that [REPLACEMENT4].",
        prompt: [
            "Reduce/Increase",
            "frequency/intensity/duration",
            "specify where issue effects persons life: work, community, personal relationships",
            "how would person served see their life improved",
        ]
    },
]

export type PossibleGoal = typeof possibleGoals[number]

export const possibleInterventions = [
    { text: "Use and promote Narrative practice of externalized language to give [CLIENT] space to take a position on their relationship with [ISSUE]." },
    { text: "Use Narrative practice of deconstructive questions to help [CLIENT] develop a rich understanding of the [ISSUE], and how it operates in their life." },
    { text: "Use Narrative practice of deconstruction questions to help [CLIENT] take and then evaluate their stance on the problems' effects in their life." },
    { text: "Use Narrative practice of deconstructive questions to help [CLIENT]  identify and develop a rich understanding of unique outcomes (situations, events, and circumstances free from [ISSUE]’s influence)." },
    { text: "Use Narrative practice of Re-Authoring to help [CLIENT] develop and make rich preferred stories about their life." },
    { text: "Use Narrative practice of Re-membering Conversations to invoke the presence/memory of someone to thicken alternative/preferred stories." },
    { text: "Refer [CLIENT] to physician for medical evaluation. " },
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
        planLogistics: {
            clientInitials: "",
            firstDateOfService: new Date(),
            modalityPlanned: modalities[0],
            meetingFrequency: frequency[0],
            treatmentLength: length[1],
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
            replacementText: [["","","","",""],["","","","",""]],
            active: true,
            initiatedAt: new Date(),
            estimatedCompletionDate: new Date((new Date()).setMonth((new Date()).getMonth() + 6)),
            completed: false,
        },
        goal2: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [["","","","",""],["","","","",""]],
            active: false,
            initiatedAt: new Date(),
            estimatedCompletionDate: new Date((new Date()).setMonth((new Date()).getMonth() + 6)),
            completed: false,
        },
        goal3: {
            possibleGoalsIndex: 0,
            issue: "",
            possibleGoalSelectionState: "UNSELECTED",
            otherGoal: "",
            replacementText: [["","","","",""],["","","","",""]],
            active: false,
            initiatedAt: new Date(),
            estimatedCompletionDate: new Date((new Date()).setMonth((new Date()).getMonth() + 6)),
            completed: false,
        },
    },
    currentTab: "/meeting-logstics",
}