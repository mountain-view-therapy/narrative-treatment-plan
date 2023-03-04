import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { getState } from '../../state/provider';
import { frequency, length, modalities } from '../../state/constants';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const MeetingLogistics = () => {
  const { meetingInformation: {
    meetingLogistics: {
      clientInitials,
      setClientInitials,
      firstDateOfService,
      setFirstDateOfService,
      modalityPlanned,
      setModalityPlanned,
      meetingFrequency,
      setMeetingFrequency,
      treatmentLength,
      setTreatmentLength,
      otherTreatmentLength,
      setOtherTreatmentLength,
      otherMeetingFrequency,
      setOtherMeetingFrequency,
    },
  }
  } = getState();



  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' border='green' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Meeting Logistics</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={5} paddingBottom={5}>
        <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />

        <FormControl>
          <FormLabel id="participation-radio-buttons-group-label">
            Did the person served and or their guardian participate in the development of this plan?
          </FormLabel>
          <RadioGroup
            aria-labelledby="participation-radio-buttons-group-label"
            defaultValue="Yes"
            name="participation-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>


        <Stack flexDirection="row" spacing={1} >
          <FormLabel id="first-date-of-service-label">
            First Date of Service
          </FormLabel>
          <DatePicker
            aria-labelledby="first-date-of-service-label"
            selected={firstDateOfService}
            onChange={(date) => setFirstDateOfService(date || new Date())}
          />
        </Stack>



        <FormControl>
          <FormLabel id="modality-planned">Modality Planned</FormLabel>
          <RadioGroup
            aria-labelledby="modality-planned"
            name="modality-planned"
            onChange={(e) => setModalityPlanned(e.target.value)}
            value={modalityPlanned}
          >
            {
              modalities.map(modality =>
                <FormControlLabel value={modality} control={<Radio />} label={modality} key={modality} />
              )
            }
          </RadioGroup>
        </FormControl>



        <FormControl>
          <FormLabel id="meeting-frequency">Meeting Frequency</FormLabel>
          <RadioGroup
            aria-labelledby="meeting-frequency"
            name="meeting-frequency"
            onChange={(e) => setMeetingFrequency(e.target.value)}
            value={meetingFrequency}
          >
            {
              frequency.map(frequency =>
                <FormControlLabel value={frequency} control={<Radio />} label={frequency} key={frequency} />
              )
            }
          </RadioGroup>
        </FormControl>
        {meetingFrequency === 'Other' &&
          <TextField size='small' label='Other Treatment Length' value={otherMeetingFrequency} onChange={(e) => setOtherMeetingFrequency(e.target.value)} />
        }


        <FormControl>
          <FormLabel id="treatment-length">Treatment Length</FormLabel>
          <RadioGroup
            aria-labelledby="treatment-length"
            name="treatment-length"
            onChange={(e) => setTreatmentLength(e.target.value)}
            value={treatmentLength}
          >
            {
              length.map(l =>
                <FormControlLabel value={l} control={<Radio />} label={l} key={l} />
              )
            }
          </RadioGroup>
        </FormControl>
        {treatmentLength === 'Other' &&
          <TextField size='small' label='Other Treatment Length' value={otherTreatmentLength} onChange={(e) => setOtherTreatmentLength(e.target.value)} />
        }
      </Stack>
    </Container >
  )
}

export default observer(MeetingLogistics);
