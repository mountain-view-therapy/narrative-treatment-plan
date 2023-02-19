import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { affectStates, cognitiveFunctioningStates, functionalStatusStates, interpersonalStates, moodStates, riskLevels } from '../../state/constants';
import { getState } from '../../state/provider';


const MentalStatusExam = () => {
  const { meetingInformation: {
    mentalStatusExam: {
      affect,
      cognitiveFunctioning,
      functionalStatus,
      interpersonal,
      mood,
      noRisk,
      dangerToSelf,
      dangerToSelfRisk,
      dangerToSelfEvidence,
      dangerToSelfPlan,
      dangerToOthers,
      dangerToOthersRisk,
      dangerToOthersEvidence,
      dangerToOthersPlan,
      otherRisk,
      otherRiskInformation,
      setAffect,
      setCognitiveFunctioning,
      setFunctionalStatus,
      setInterpersonal,
      setMood,
      setNoRisk,
      setDangerToSelf,
      setDangerToOthers,
      setOtherRisk,
      setDangerToSelfRisk,
      setDangerToOthersRisk,
      setDangerToSelfEvidence,
      setDangerToOthersEvidence,
      setDangerToSelfPlan,
      setDangerToOthersPlan,
      setOtherRiskInformation,
    },
  }
  } = getState();

  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Mental Status Exam</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={4}>
        <FormControl>
          <FormLabel>Cognitive Functioning</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group" >
            {
              cognitiveFunctioningStates.map(state => <Button key={state} onClick={() => setCognitiveFunctioning(state)} color={cognitiveFunctioning === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Affect</FormLabel>
          <ButtonGroup size='small' variant='contained' aria-label="outlined primary button group">
            {
              affectStates.map(state => <Button key={state} onClick={() => setAffect(state)} color={affect === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Mood</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              moodStates.map(state => <Button key={state} onClick={() => setMood(state)} color={mood === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Interpersonal</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              interpersonalStates.map(state => <Button key={state} onClick={() => setInterpersonal(state)} color={interpersonal === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Functional Status</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              functionalStatusStates.map(state => <Button key={state} onClick={() => setFunctionalStatus(state)} color={functionalStatus === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>


          <Box>
            <Stack justifyContent='center' alignItems='center' flexDirection='row' border='green' margin={2}>
              <Typography fontWeight={800} fontSize={24}>Risk Status</Typography>
            </Stack>
          </Box>

          <FormGroup>
            <FormControlLabel control={<Checkbox
              checked={noRisk}
              onChange={(e) => setNoRisk(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
              disabled={dangerToOthers || dangerToSelf || otherRisk}
            />} label="No Significant Risk Factors presented" />

            <FormControlLabel control={<Checkbox
              checked={dangerToSelf}
              onChange={(e) => setDangerToSelf(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Danger to Self"
              disabled={noRisk} />
            {dangerToSelf &&
              <Stack flexDirection='row'>
                <RadioGroup
                  onChange={(e) => setDangerToSelfRisk(e.target.value)}
                  value={dangerToSelfRisk}
                >
                  {riskLevels.map(level => <FormControlLabel value={level} control={<Radio />} label={level} key={'self' + level} />)}
                </RadioGroup>
                <TextField label='Evidence' value={dangerToSelfEvidence} onChange={(e) => setDangerToSelfEvidence(e.target.value)} />
                <TextField label='Plan' value={dangerToSelfPlan} onChange={(e) => setDangerToSelfPlan(e.target.value)} />
              </Stack>

            }

            <FormControlLabel control={<Checkbox
              checked={dangerToOthers}
              onChange={(e) => setDangerToOthers(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
              disabled={noRisk}
            />} label="Danger to Other" />
            {dangerToOthers &&
              <Stack flexDirection='row'>
                <RadioGroup
                  onChange={(e) => setDangerToOthersRisk(e.target.value)}
                  value={dangerToOthersRisk}
                >
                  {riskLevels.map(level => <FormControlLabel value={level} control={<Radio />} label={level} key={'other' + level} />)}
                </RadioGroup>
                <TextField label='Evidence' value={dangerToOthersEvidence} onChange={(e) => setDangerToOthersEvidence(e.target.value)} />
                <TextField label='Plan' value={dangerToOthersPlan} onChange={(e) => setDangerToOthersPlan(e.target.value)} />
              </Stack>
            }

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={otherRisk}
                onChange={(e) => setOtherRisk(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Other"
                disabled={noRisk}
              />
              {otherRisk &&
                <TextField label='Other' value={otherRiskInformation} onChange={(e) => setOtherRiskInformation(e.target.value)} />
              }
            </Stack>
          </FormGroup>

      </Stack>
    </Container >
  )
}

export default observer(MentalStatusExam);
