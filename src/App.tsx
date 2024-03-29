import { AppBar, Box, Toolbar, Stack, Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PlanLogistics from "./sections/planLogistics/PlanLogistics";
import Note from "./sections/note/Note";
import Diagnostic from "./sections/diagnostic/Diagnostic";
import Functioning from "./sections/functioning/Functioning";
import Interventions from "./sections/interventions/Interventions";
import Goals from "./sections/goals/Goals";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PlanLogistics />} />
        <Route path="plan-logistics" element={<PlanLogistics />} />
        <Route path="diagnostic" element={<Diagnostic />} />
        <Route path="effects-on-functioning" element={<Functioning />} />
        <Route path="goals" element={<Goals />} />
        <Route path="interventions" element={<Interventions />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  const [currentTab, setCurrentTab] = useState('plan-logistics')

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
                    value='plan-logistics'
                    label="Plan Logistics"
                    component={Link}
                    to='plan-logistics'
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
                    value='effects-on-functioning'
                    label="Effect on Functioning"
                    component={Link}
                    to='effects-on-functioning'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='goals'
                    label="Goals"
                    component={Link}
                    to='goals'
                    style={{ fontSize: '12px', color: 'white' }}
                  />

                  <Tab
                    value='interventions'
                    label="Interventions"
                    component={Link}
                    to='interventions'
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
        <Link to={'/plan-logistics'}>Go to the home page</Link>
      </p>
    </div >
  );
}



export default App

