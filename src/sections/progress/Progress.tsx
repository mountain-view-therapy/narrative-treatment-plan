import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleProgressions } from '../../state/constants';
import { getState } from '../../state/provider';


const Progress = () => {
  const {
    meetingInformation: {
      meetingLogistics: {
        clientInitials,
        setClientInitials,
      },
      progressions,
      otherProgressions,
      setProgress,
      setProgressReplacementText,
      setOtherProgression,
      addOtherProgression,
      removeOtherProgression,
      identifiedProblem,
      setIdentifedProblem,
    } } = getState()

    const replaceText = (text: string, index: number) => {
      return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]',progressions.find(i => i.possibleProgressIndex === index)?.replacementText || "[REPLACE ME]")
      }


  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Progress</Typography>
        </Stack>
      </Box>
      <Stack>
        <Stack flexDirection='row' justifyContent='space-between'>
          <TextField label='Identified Problem' style={{ margin: 3, width: 400, fontSize: 12 }} value={identifiedProblem} onChange={(e) => setIdentifedProblem(e.target.value)} />
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />
        </Stack>
        {
          possibleProgressions.map((progress, index) => (
            < Stack flexDirection='row' key={progress.text}>
              <FormControlLabel control={<Checkbox
                checked={Boolean(progressions.find(i => i.possibleProgressIndex === index))}
                onChange={(e) => setProgress(index, e.target.checked)}
                inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
              />} label={replaceText(progress.text, index)} />
              {progress.prompt && Boolean(progressions.find(i => i.possibleProgressIndex === index)) &&
                <TextField label={progress.prompt} style={{ margin: 3, width: 350, fontSize: 12 }} value={progressions.find(i => i.possibleProgressIndex === index)?.replacementText} onChange={(e) => setProgressReplacementText(index, e.target.value)} />
              }
            </Stack>
          ))
        }
      </Stack >
      <Stack flexDirection='column' spacing={1} marginTop={3}>
          <Stack flexDirection='column' >
            {otherProgressions.map((otherProgression, idx) =>
              <Stack flexDirection='row' alignItems='center'>
                <TextField label={`Other Progression ${idx + 1}`} fullWidth style={{ margin: 3, }} value={otherProgressions[idx]} onChange={(e) => setOtherProgression(idx, e.target.value)} />
                <Button
                  variant='contained'
                  style={{ height: 30 }}
                  disabled={otherProgressions.length < 2}
                  onClick={() => removeOtherProgression(idx)}
                >
                  -
                </Button>
              </Stack>
            )}
          </Stack>
          <Button
            variant='contained'
            style={{ width: 20 }}
            onClick={() => addOtherProgression()}
          >
            +
          </Button>
        </Stack>
    </Container >
  )
}

export default observer(Progress);
