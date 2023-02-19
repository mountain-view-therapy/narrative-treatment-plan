import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleRecommendationsForMovingForward } from '../../state/constants';
import { getState } from '../../state/provider';
import { useState } from 'react';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const NextMeeting = () => {
  const {
    meetingInformation: {
      recommendationForMovingForward,
      setRecommendationForMovingForward,
      frequencyChangeExplanation,
      setFrequencyChangeExplanation,
      nextMeeting,
      setNextMeeting,
    } } = getState()

  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2018-01-01T00:00:00.000Z'),
  );

  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Next Meeting</Typography>
        </Stack>
      </Box>
      <Stack spacing={3}>
        <Stack flexDirection='row' justifyContent='space-between'>
          <FormControl>
            <FormLabel id="Recommendations-moving-forward">Recommendations moving forward</FormLabel>
            <RadioGroup
              aria-labelledby="Recommendations-moving-forward"
              name="Recommendations-moving-forward"
              onChange={(e) => setRecommendationForMovingForward(e.target.value)}
              value={recommendationForMovingForward}
            >
              {
                possibleRecommendationsForMovingForward.map(rec =>
                  <FormControlLabel value={rec} control={<Radio />} label={rec} key={rec} />
                )
              }
            </RadioGroup>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              label="Next Meeting"
              value={dayjs(nextMeeting)}
              onChange={(newValue) => {
                setNextMeeting(newValue?.toString() || "");
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

        </Stack>
        <TextField
          style={{ width: 540 }}

          placeholder='Explain if frequency has changed or if not scheduling the next meeting'
          label='Optional Frequency or Scheduling Change Explanation'
          multiline
          fullWidth
          rows={20}
          value={frequencyChangeExplanation}
          onChange={(e) => setFrequencyChangeExplanation(e.target.value)} />
      </Stack >
    </Container >
  )
}
export default observer(NextMeeting);