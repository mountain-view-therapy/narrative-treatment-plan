import { AppBar, Box, Toolbar, Stack, Tab, Tabs, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button, Checkbox } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { possibleGoals } from "../../state/constants";
import { getState } from "../../state/provider";
import { Goal } from "../../models/GoalModel.mst";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Goals = () => {
    const { treatmentPlan: {
        goal1,
        goal2,
        goal3,
    } } = getState()

    const [currentGoal, setCurrentGoal] = useState(goal1)
    const handleChange = (event: React.SyntheticEvent, goal: Goal) => {
        setCurrentGoal(goal)
    }

    const handleAdd = (event: React.SyntheticEvent) => {
        if (goal3.active) {
            return
        } else if (goal2.active) {
            goal3.setActive()
            setCurrentGoal(goal3)
        } else if (goal1.active) {
            goal2.setActive()
            setCurrentGoal(goal2)
        } else {
            goal1.setActive()
            setCurrentGoal(goal1)
        }
    }

    const replaceText = (text: string) => {
        return text
            .replace('[ISSUE]', currentGoal.issue || '[ISSUE]')
            .replace('[REPLACEMENT1]', currentGoal.replacementText[0] || '[REPLACEMENT1]')
            .replace('[REPLACEMENT2]', currentGoal.replacementText[1] || '[REPLACEMENT2]')
    }

    return (
        <Box overflow='auto' >
            <Stack flexDirection='row' justifyContent='space-evenly'>
                <Box width='100%' border="thick" borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} >
                    <AppBar position='static' >
                        <Container>
                            <Toolbar disableGutters={true}>
                                <Tabs
                                    value={currentGoal}
                                    onChange={handleChange}
                                    aria-label="main tabs"
                                    textColor="secondary"
                                    indicatorColor='secondary'
                                    variant='fullWidth'
                                    TabIndicatorProps={{ style: { background: 'white' } }}
                                >
                                    {goal1.active &&
                                        <Tab
                                            value={goal1}
                                            label="goal1"
                                            style={{ fontSize: '12px', color: 'white' }}
                                        />
                                    }
                                    {goal2.active &&
                                        <Tab

                                            value={goal2}
                                            label="goal2"
                                            style={{ fontSize: '12px', color: 'white' }}
                                        />
                                    }
                                    {goal3.active &&
                                        <Tab
                                            value={goal3}
                                            label="goal3"
                                            style={{ fontSize: '12px', color: 'white' }}
                                        />
                                    }
                                    <Tab
                                        value="+"
                                        onClick={(e) => handleAdd(e)}
                                        label="+"
                                        disabled={goal3.active}
                                        style={{ fontWeight: 'bold', fontSize: '20px', color: goal3.active ? '#1976d2' : 'white' }}
                                    />
                                </Tabs>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>
            </Stack>
            <Box padding={2}>
                <>
                    <Stack flexDirection="row" justifyContent="space-evenly">
                        <Stack flexDirection="row" justifyContent="space-evenly" alignItems="center">
                            <Typography marginRight={3}>Is this an update?</Typography>
                            <RadioGroup row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Stack>
                        <Stack flexDirection="row" spacing={1} >
                            <FormLabel id="first-date-of-service-label">
                                First Date of Service
                            </FormLabel>
                            <DatePicker
                                aria-labelledby="first-date-of-service-label"
                                selected={currentGoal.initiatedAt}
                                onChange={(date) => currentGoal.setInitiatedAt(date || new Date())}
                            />
                        </Stack>
                        <TextField label="Name of Issue" value={currentGoal.issue} onChange={(e) => currentGoal.setIssue(e.target.value)} />

                    </Stack>
                    <Box paddingTop={1}>

                        <Stack flexDirection='column' marginLeft={2}>

                            {possibleGoals.map((possibleGoal, index) =>
                                <Stack flexDirection="row" justifyContent="start" alignItems="center">
                                    <Checkbox
                                        checked={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === index}
                                        onChange={(e) => currentGoal.setCheckedGoal(index, e.target.checked)}

                                    />
                                    <Stack>
                                        <Typography
                                            color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === index ? "black" : "gray"}>
                                            {currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === index ? replaceText(possibleGoal.text) : possibleGoal.text}
                                        </Typography>
                                        <>
                                            {possibleGoal.prompt.map((prompt: string, replacementIndex: number) =>
                                                <TextField
                                                    disabled={currentGoal.possibleGoalSelectionState !== "SELECTED" || currentGoal.possibleGoalsIndex !== index}
                                                    value={currentGoal.possibleGoalsIndex !== index ? "" : currentGoal.replacementText[replacementIndex]}
                                                    onChange={(e) => currentGoal.setReplacementText(e.target.value, replacementIndex)}
                                                    placeholder={prompt}
                                                />
                                            )}
                                        </>
                                    </Stack>
                                </Stack>
                            )}
                            <Stack flexDirection="row" justifyContent="start" alignItems="center" marginTop={2}>
                                <Checkbox
                                    checked={currentGoal.possibleGoalSelectionState === "OTHER"}
                                    onChange={(e) => currentGoal.setOtherGoalChecked(e.target.checked)}

                                />
                                <TextField disabled={currentGoal.possibleGoalSelectionState !== "OTHER"} multiline label="Other Goal" style={{ margin: 3, width: 800, fontSize: 12 }} value={currentGoal.otherGoal} onChange={(e) => currentGoal.setOtherGoal(e.target.value)} />

                            </Stack>
                        </Stack>
<Typography>Objectives</Typography>


                    </Box>

                    <Box>

                    </Box>
                </>

            </Box>
        </Box >
    )
}


export default observer(Goals);

