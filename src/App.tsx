import { AppBar, Box, Toolbar, Stack, Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MeetingLogistics from "./sections/meetingLogistics/MeetingLogistics";
import Note from "./sections/note/Note";
import Diagnostic from "./sections/diagnostic/Diagnostic";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MeetingLogistics />} />
        <Route path="meeting-logistics" element={<MeetingLogistics />} />
        <Route path="diagnostic" element={<Diagnostic />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  const [currentTab, setCurrentTab] = useState('meeting-logistics')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <Box overflow='auto' >
      <Stack flexDirection='row' justifyContent='space-evenly'>
        <Box width='60%' border="thick" borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} >
          <AppBar position='static'>
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
                  <Tab
                    value='meeting-logistics'
                    label="Meeting Logistics"
                    component={Link}
                    to='meeting-logistics'
                    style={{ fontSize: '12px', color: 'white' }}
                  />

                  <Tab
                    value='diagnostic'
                    label="Diagnostic"
                    component={Link}
                    to='diagnostic'
                    style={{ fontSize: '12px', color: 'white' }}

                  />

                  <Tab
                    value='mental-status-exam'
                    label="MSE/Risk"
                    component={Link}
                    to='mental-status-exam'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='problems'
                    label="Problem(s)"
                    component={Link}
                    to='problems'
                    style={{ fontSize: '12px', color: 'white' }}
                  />

                  <Tab
                    value='interventions'
                    label="Interventions"
                    component={Link}
                    to='interventions'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                  <Tab
                    value='progress'
                    label="Progress"
                    component={Link}
                    to='progress'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                  <Tab
                    value='next-meeting'
                    label="Next Meeting"
                    component={Link}
                    to='next-meeting'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                </Tabs>
              </Toolbar>
            </Container>
          </AppBar>
          <Box overflow='auto' >
            <Outlet />
          </Box>
        </Box>
        <Box flexGrow={2} >
          <Box overflow='auto' >
            <Note />
          </Box>
        </Box>
      </Stack>
    </Box >
  )
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={'/meeting-logistics'}>Go to the home page</Link>
      </p>
    </div >
  );
}



export default App

