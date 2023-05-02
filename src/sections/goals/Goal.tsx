import { Stack, Typography, TextField, Checkbox } from "@mui/material";
import { observer } from "mobx-react-lite";
import { PossibleGoal } from "../../state/constants";
import { getState } from "../../state/provider";
import { IGoal } from "../../models/GoalModel.mst";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    possibleGoal: PossibleGoal;
    goal: IGoal;
    index: number;
}

const Goal = ({ goal, possibleGoal, index }: Props) => {


    const { treatmentPlan: {
        meetingLogistics: {
            clientInitials,
        }
    } } = getState()

    const replaceText = (text: string) => {
        return text
            .replace(/\[ISSUE\]/g, goal.issue || '[ISSUE]')
            .replace(/\[CLIENT\]/g, clientInitials || '[CLIENT]')
            .replace('[REPLACEMENT1]', goal.replacementText[0] || '[REPLACEMENT1]')
            .replace('[REPLACEMENT2]', goal.replacementText[1] || '[REPLACEMENT2]')
    }

    return (
        <Stack flexDirection="row" justifyContent="start" alignItems="center">
            <Checkbox
                checked={goal.possibleGoalSelectionState === "SELECTED" && goal.possibleGoalsIndex === index}
                onChange={(e) => goal.setCheckedGoal(index, e.target.checked)}

            />
            <Stack>
                <Typography
                    color={goal.possibleGoalSelectionState === "SELECTED" && goal.possibleGoalsIndex === index ? "black" : "gray"}>
                    {goal.possibleGoalSelectionState === "SELECTED" && goal.possibleGoalsIndex === index ? replaceText(possibleGoal.text) : possibleGoal.text}
                </Typography>
                <>
                    {possibleGoal.prompt.map((prompt: string, replacementIndex: number) =>
                        <TextField
                            disabled={goal.possibleGoalSelectionState !== "SELECTED" || goal.possibleGoalsIndex !== index}
                            value={goal.possibleGoalsIndex !== index ? "" : goal.replacementText[replacementIndex]}
                            onChange={(e) => goal.setReplacementText(e.target.value, replacementIndex)}
                            placeholder={prompt}
                        />
                    )}
                </>
            </Stack>
        </Stack>

    )
}


export default observer(Goal);

