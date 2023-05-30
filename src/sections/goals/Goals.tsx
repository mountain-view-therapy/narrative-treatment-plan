import { AppBar, Box, Toolbar, Stack, Tab, Tabs, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Checkbox, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { possibleGoals, possibleObjectives } from "../../state/constants";
import { getState } from "../../state/provider";
import { IGoal } from "../../models/GoalModel.mst";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Objective from "./Objective";
import Goal from "./Goal";

const Goals = () => {
    const { treatmentPlan: {
        goal1,
        goal2,
        goal3,
    } } = getState()

    const [currentGoal, setCurrentGoal] = useState(goal1)

    const handleChange = (event: React.SyntheticEvent, goal: IGoal) => {
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
                                        style={{ fontWeight: 'bold', fontSize: '20px', color: goal3.active ? '#027d24' : 'white' }}
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
                        <TextField label="Name of Issue" value={currentGoal.issue} onChange={(e) => currentGoal.setIssue(e.target.value)} />

                        <Stack flexDirection="row" justifyContent="space-evenly" alignItems="center">
                            <Typography marginRight={3}>Is this an update?</Typography>
                            <RadioGroup
                                row
                                onChange={(e) => currentGoal.setUpdatingGoal(e.target.value === "Yes")}
                                value={currentGoal.updatingGoal ? "Yes" : "No"}
                                defaultValue={false}
                            >
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

                    </Stack>
                    <Box paddingTop={1}>
                        <Typography>Goal</Typography>
                        <Stack flexDirection='column' marginLeft={2}>
                            <Box border={1} padding={1} marginBottom={1}>
                                <Stack flexDirection="row" alignItems="start">
                                    <Checkbox
                                        checked={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0}
                                        onChange={(e) => currentGoal.setCheckedGoal(0, e.target.checked)}

                                    />
                                    <Stack flexDirection="column" marginLeft={5} width={10000}>

                                        <Stack flexDirection="row" alignItems="center">
                                            <Typography marginRight={1} color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0 ? "black" : "gray"}>
                                                Change the relationship with {currentGoal.issue} to reduce the frequency, intensity and duration of its effects
                                            </Typography>
                                        </Stack>
                                        <Stack flexDirection="row" alignItems="center">

                                            <Typography width={200} marginRight={1} color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0 ? "black" : "gray"}>
                                                in relation to
                                            </Typography>

                                            <TextField
                                                fullWidth
                                                disabled={currentGoal.possibleGoalSelectionState !== "SELECTED" || currentGoal.possibleGoalsIndex !== 0}
                                                value={currentGoal.possibleGoalsIndex !== 0 ? "" : currentGoal.replacementText[0][0]}
                                                onChange={(e) => currentGoal.setReplacementText(e.target.value, 0, 0)}
                                                placeholder={possibleGoals[0].prompt[0]}
                                            />
                                        </Stack>
                                        <Stack flexDirection="row" alignItems="center">
                                            <Typography width={100} marginRight={1} color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0 ? "black" : "gray"}>
                                                so that
                                            </Typography>


                                            <TextField
                                                fullWidth
                                                disabled={currentGoal.possibleGoalSelectionState !== "SELECTED" || currentGoal.possibleGoalsIndex !== 0}
                                                value={currentGoal.possibleGoalsIndex !== 0 ? "" : currentGoal.replacementText[0][1]}
                                                onChange={(e) => currentGoal.setReplacementText(e.target.value, 0, 1)}
                                                placeholder={possibleGoals[0].prompt[1]}
                                            />
                                            <Typography color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0 ? "black" : "gray"}>.</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Box border={1} padding={1} marginBottom={2}>

                                <Stack flexDirection="row" alignItems="start">
                                    <Checkbox
                                        checked={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 1}
                                        onChange={(e) => currentGoal.setCheckedGoal(1, e.target.checked)}

                                    />
                                    <Stack flexDirection="column" marginLeft={5} spacing={1} width={10000}>

                                        <Stack flexDirection="row" alignItems="center" justifyContent="space-evenly">
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={currentGoal.possibleGoalsIndex !== 1 ? "" : currentGoal.replacementText[1][0]}
                                                onChange={(e) => currentGoal.setReplacementText(e.target.value, 1, 0)}
                                            >
                                                <MenuItem value="Reduce">Reduce</MenuItem>
                                                <MenuItem value="Increase">Increase</MenuItem>
                                            </Select>
                                            <Typography marginLeft={5}> </Typography>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={currentGoal.possibleGoalsIndex !== 1 ? "" : currentGoal.replacementText[1][1]}
                                                onChange={(e) => currentGoal.setReplacementText(e.target.value, 1, 1)}
                                            >
                                                <MenuItem value="Frequency">Frequency</MenuItem>
                                                <MenuItem value="Intensity">Intensity</MenuItem>
                                                <MenuItem value="Duration">Duration</MenuItem>
                                            </Select>

                                            <Typography width={320} marginLeft={5} color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 1 ? "black" : "gray"}>of {currentGoal.issue}</Typography>
                                        </Stack>
                                        <Stack flexDirection="row" alignItems="center">
                                            <Typography marginRight={3} width={120} color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 1 ? "black" : "gray"}>in relation to</Typography>

                                            <TextField
                                                fullWidth
                                                disabled={currentGoal.possibleGoalSelectionState !== "SELECTED" || currentGoal.possibleGoalsIndex !== 1}
                                                value={currentGoal.possibleGoalsIndex !== 1 ? "" : currentGoal.replacementText[1][2]}
                                                onChange={(e) => currentGoal.setReplacementText(e.target.value, 1, 2)}
                                                placeholder={possibleGoals[1].prompt[2]}
                                            />
                                        </Stack>
                                        <Stack flexDirection="row" alignItems="center">
                                            <Typography width={100} marginRight={5} color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0 ? "black" : "gray"}>so that</Typography>
                                            <TextField
                                                fullWidth
                                                disabled={currentGoal.possibleGoalSelectionState !== "SELECTED" || currentGoal.possibleGoalsIndex !== 1}
                                                value={currentGoal.possibleGoalsIndex !== 1 ? "" : currentGoal.replacementText[1][3]}
                                                onChange={(e) => currentGoal.setReplacementText(e.target.value, 1, 3)}
                                                placeholder={possibleGoals[1].prompt[3]}
                                            />
                                            <Typography color={currentGoal.possibleGoalSelectionState === "SELECTED" && currentGoal.possibleGoalsIndex === 0 ? "black" : "gray"}>.</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>

                            <Box border={1} padding={1} marginBottom={2}>

                                <Stack flexDirection="row" justifyContent="start" alignItems="center" marginTop={2}>
                                    <Checkbox
                                        checked={currentGoal.possibleGoalSelectionState === "OTHER"}
                                        onChange={(e) => currentGoal.setOtherGoalChecked(e.target.checked)}

                                    />
                                    <TextField disabled={currentGoal.possibleGoalSelectionState !== "OTHER"} multiline label="Other Goal" style={{ margin: 3, width: 800, fontSize: 12 }} value={currentGoal.otherGoal} onChange={(e) => currentGoal.setOtherGoal(e.target.value)} />

                                </Stack>
                            </Box>

                        </Stack>
                        <Typography>Objectives</Typography>
                        {
                            possibleObjectives.map((objective, index) =>
                                <Objective
                                    objective={objective}
                                    index={index}
                                    goal={currentGoal}
                                    key={"possibleObjective" + index}
                                />
                            )
                        }
                    </Box>

                </>
                <Stack flexDirection="row" spacing={1} >
                    <FormLabel id="first-date-of-service-label">
                        Estimated Date of Completion
                    </FormLabel>
                    <DatePicker
                        aria-labelledby="first-date-of-service-label"
                        selected={currentGoal.estimatedCompletionDate}
                        onChange={(date) => currentGoal.setEstimatedCompletionDate(date || new Date())}
                    />
                </Stack>
            </Box>
        </Box >
    )
}


export default observer(Goals);

