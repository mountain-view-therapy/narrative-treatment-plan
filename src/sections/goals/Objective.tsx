import { Stack, Typography, Checkbox, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { PossibleObjective, PossibleProgression } from "../../state/constants";
import { getState } from "../../state/provider";
import { IGoal } from "../../models/GoalModel.mst";
import "react-datepicker/dist/react-datepicker.css";


type Props = {
    goal: IGoal;
    objective: PossibleObjective;
    index: number;
}

const Objective = ({ goal, objective, index }: Props) => {

    const { treatmentPlan } = getState()

    const replaceText = (text: string) => {
        return text
            .replace(/\[ISSUE\]/g, goal.issue || '[ISSUE]')
            .replace(/\[CLIENT\]/g, treatmentPlan.planLogistics.clientInitials || '[CLIENT]')
            .replace('[REPLACEMENT1]', goal.replacementText[0] || '[REPLACEMENT1]')
            .replace('[REPLACEMENT2]', goal.replacementText[1] || '[REPLACEMENT2]')
    }

    const checked = Boolean(goal.objectives.find(selected => index === selected.possibleObjectiveIndex))

    return (
        <>
            <Stack flexDirection="row" justifyContent="start" alignItems="flex-start" marginBottom={5}>
                <Checkbox
                    checked={checked}
                    onChange={(e) => goal.setObjectiveChecked(index, e.target.checked)}
                />
                <Stack>
                    <Typography
                        color={goal.isObjectiveChecked(index) ? "black" : "gray"}>
                        {replaceText(objective.title)}
                    </Typography>
                    {
                        goal.updatingGoal &&
                        <Stack flexDirection="column" justifyContent="start" alignItems="flex-start" marginBottom={5}>
                            <Stack flexDirection="row">
                                <Checkbox
                                    checked={goal.isNoProgressChecked(index)}
                                    onChange={(e) => goal.setNoProgressChecked(index, e.target.checked)}
                                />
                                <Typography>{replaceText(objective.options["No Progress"].text)}</Typography>


                            </Stack>
                            <Stack flexDirection="row">
                                <Checkbox
                                    checked={goal.isStillWorkingChecked(index)}
                                    onChange={(e) => goal.setStillWorkingChecked(index, e.target.checked)}
                                />
                                <Typography>{replaceText(objective.options["Still Working"].text)}</Typography>

                            </Stack>
                            <Stack>
                                {
                                    objective.options["Still Working"].progressions.map((progression: PossibleProgression, stillWorkingProgressionsIndex: number) =>
                                        <Stack flexDirection="row" justifyContent="start" alignItems="center" paddingLeft={10}>
                                            <Checkbox
                                                checked={goal.isStillWorkingProgressionChecked(index, stillWorkingProgressionsIndex)}
                                                onChange={(e) => goal.setStillWorkingProgressionChecked(index, stillWorkingProgressionsIndex, e.target.checked)}
                                            />
                                            <Stack>
                                                <Typography
                                                    color={goal.isStillWorkingProgressionChecked(index, stillWorkingProgressionsIndex) ? "black" : "gray"}>
                                                    {progression.text ? replaceText(progression.text) : progression.text}
                                                </Typography>
                                                {goal.objectives[index] && progression.prompt &&
                                                    <TextField
                                                        // disabled={!goal.isStillWorkingProgressionChecked(index, stillWorkingProgressionsIndex)}
                                                        value={goal.getStillWorkingProgressionsReplacementText(index, stillWorkingProgressionsIndex) || ""}
                                                        onChange={(e) => goal.setStillWorkingProgressionsReplacementText(index, e.target.value, stillWorkingProgressionsIndex)}
                                                        placeholder={progression.prompt}
                                                    />
                                                }
                                            </Stack>
                                        </Stack>
                                    )
                                }
                            </Stack>

                            <Stack flexDirection="row">
                                <Checkbox
                                    checked={goal.isFinishedChecked(index)}
                                    onChange={(e) => goal.setFinishedChecked(index, e.target.checked)}
                                />
                                <Typography>{replaceText(objective.options["Finished"].text)}</Typography>
                            </Stack>
                            <Stack>
                                {
                                    objective.options["Finished"].progressions.map((progression: PossibleProgression, finishedProgressionIndex: number) =>
                                        <Stack flexDirection="row" justifyContent="start" alignItems="center" paddingLeft={10}>
                                            <Checkbox
                                                checked={goal.isFinishedProgressionChecked(index, finishedProgressionIndex)}
                                                onChange={(e) => goal.setFinishedProgressionChecked(index, finishedProgressionIndex, e.target.checked)}
                                            />
                                            <Stack>
                                                <Typography
                                                    color={goal.isFinishedProgressionChecked(index, finishedProgressionIndex) ? "black" : "gray"}>
                                                    {progression.text ? replaceText(progression.text) : progression.text}
                                                </Typography>
                                                {goal.objectives[index] && progression.prompt &&
                                                    <TextField
                                                    value={goal.getFinshedProgressionsReplacementText(index, finishedProgressionIndex) || ""}
                                                        onChange={(e) => goal.setFinshedProgressionsReplacementText(index, e.target.value, finishedProgressionIndex)}
                                                        placeholder={progression.prompt}
                                                    />
                                                }
                                            </Stack>
                                        </Stack>
                                    )
                                }

                            </Stack>
                        </Stack >
                    }
                </Stack>
            </Stack>
        </>
    )
}



export default observer(Objective);

