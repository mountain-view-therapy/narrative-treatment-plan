import { AppBar, Box, Toolbar, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import { useState } from "react";


const Goals = () => {
    const [currentTab, setCurrentTab] = useState('meeting-logistics')
    const [goals, setGoals] = useState(['Goal 1', 'Goal 2'])
    const [goal, setGoal] = useState(goals[0])
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (newValue === 'add-a-goal') {
            setGoals([...goals, `poop-${goals.length}`])
            setGoal(`poop-${goals.length}`)
            setCurrentTab(`poop-${goals.length}`)
        } else {
            setGoal(newValue)
            setCurrentTab(newValue)
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
                                    value={currentTab}
                                    onChange={handleChange}
                                    aria-label="main tabs"
                                    textColor="secondary"
                                    indicatorColor='secondary'
                                    variant='fullWidth'
                                    TabIndicatorProps={{ style: { background: 'white' } }}
                                >
                                    {goals.map(goal =>
                                        <Tab
                                            value={goal}
                                            label={goal}
                                            style={{ fontSize: '12px', color: 'white' }}
                                        />
                                    )}
                                    <Tab
                                        value='add-a-goal'
                                        label="+"

                                        style={{ fontSize: '12px', color: 'white' }}
                                    />
                                </Tabs>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>
            </Stack>
            <Box>
                <Typography>POOP {goal}</Typography>
            </Box>
        </Box >
    )
}


export default observer(Goals);

