import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleInterventions } from '../../state/constants';
import { getState } from '../../state/provider';


const Interventions = () => {
  const {
    meetingInformation: {
      meetingLogistics: {
        clientInitials,
        setClientInitials,
      },
      interventions,
      otherInterventions,
      setIntervention,
      setOtherIntervention,
      addOtherIntervention,
      removeOtherIntervention,
      setInterventionReplacementText,
      identifiedProblem,
      setIdentifedProblem,
    } } = getState()

  const replaceText = (text: string, index: number) => {
    return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]', interventions.find(i => i.possibleInterventionsIndex === index)?.replacementText || "[REPLACE ME]")
  }

  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Interventions</Typography>
        </Stack>
      </Box>
      <Stack marginBottom={3}>
        <Stack flexDirection='row' justifyContent='space-between'>
          <TextField label='Identified Problem' style={{ margin: 3, width: 400, fontSize: 12 }} value={identifiedProblem} onChange={(e) => setIdentifedProblem(e.target.value)} />
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />
        </Stack>
        {
          possibleInterventions.map((intervention, index) => (
            < Stack flexDirection='row' key={intervention.text}>
              <FormControlLabel control={<Checkbox
                checked={Boolean(interventions.find(i => i.possibleInterventionsIndex === index))}
                onChange={(e) => setIntervention(index, e.target.checked)}
                inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
              />} label={replaceText(intervention.text, index)}
              />
              {intervention.prompt && Boolean(interventions.find(i => i.possibleInterventionsIndex === index)) &&
                <TextField label={intervention.prompt} style={{ margin: 3, width: 350, fontSize: 12 }} value={interventions.find(i => i.possibleInterventionsIndex === index)?.replacementText} onChange={(e) => setInterventionReplacementText(index, e.target.value)} />
              }
            </Stack>
          ))
        }
        <Stack flexDirection='column' spacing={1} marginTop={3}>
          <Stack flexDirection='column' >
            {otherInterventions.map((otherIntervention, idx) =>
              <Stack flexDirection='row' alignItems='center'>
                <TextField label={`Other Intervention ${idx + 1}`} fullWidth style={{ margin: 3, }} value={otherInterventions[idx]} onChange={(e) => setOtherIntervention(idx, e.target.value)} />
                <Button
                  variant='contained'
                  style={{ height: 30 }}
                  disabled={otherInterventions.length < 2}
                  onClick={() => removeOtherIntervention(idx)}
                >
                  -
                </Button>
              </Stack>
            )}
          </Stack>
          <Button
            variant='contained'
            style={{ width: 20 }}
            onClick={() => addOtherIntervention()}
          >
            +
          </Button>
        </Stack>
      </Stack >
    </Container >
  )
}

export default observer(Interventions);
