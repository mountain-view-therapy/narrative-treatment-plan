import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, NativeSelect, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { getState } from '../../state/provider';
import { frequency, modalities } from '../../state/constants';
import TimePicker from '../../components/TimePicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from 'react';


const MeetingLogistics = () => {
  const { meetingInformation: {
    meetingLogistics: {
      clientInitials,
      telehealthPlatform,
      //telehealthAppropriate,
      //telehealthConsent,
      startTime,
      endTime,
      clientPresent,
      spouseName,
      spousePresent,
      partnerName,
      partnerPresent,
      parentName,
      parentPresent,
      siblingName,
      siblingPresent,
      childName,
      childPresent,
      otherName,
      otherPresent,
      setClientInitials,
      setClientPresent,
      setEndTime,
      setOtherName,
      setOtherPresent,
      setParentName,
      setParentPresent,
      setPartnerName,
      setPartnerPresent,
      setchildName,
      setSiblingName,
      setSiblingPresent,
      setSpouseName,
      setSpousePresent,
      setStartTime,
      //setTelehealthAppropriate,
      //setTelehealthConsent,
      setTelehealthPlatform,
      setchildPresent,



      firstDateOfService,
      setFirstDateOfService,
      modalityPlanned,
      setModalityPlanned,
      meetingFrequency,
      setMeetingFrequency,

    },

  }
  } = getState();

  const calculateTimeDiff = () => {
    const startTimeResult = startTime.match(/(\d\d):(\d\d) ([A,P]M)/);
    const endTimeResult = endTime.match(/(\d\d):(\d\d) ([A,P]M)/);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [startMatch, startHourStr, startMinuteStr, startAmPm] = startTimeResult || []
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [endMatch, endHourStr, endMinuteStr, endAmPm] = endTimeResult || []
    let endHour = parseInt(endHourStr)
    let startHour = parseInt(startHourStr)
    if (endHour === 12 && endAmPm === 'AM') {
      endHour = 0
    }
    if (startHour === 12 && startAmPm === 'AM') {
      startHour = 0
    }
    if (endAmPm === 'PM') {
      endHour += 12
    }
    if (startAmPm === 'PM') {
      startHour += 12
    }
    const hourDiff = (endHour - startHour) * 60
    const minuteDiff = parseInt(endMinuteStr) - parseInt(startMinuteStr)
    return hourDiff + minuteDiff
  }


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
            <FormLabel id="modality-planned">Meeting Frequency</FormLabel>
            <RadioGroup
              aria-labelledby="modality-planned"
              name="modality-planned"
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






        <FormControl>
          <FormLabel id="telehealth-appropriate-radio-buttons-group-label">Is person-served appropriate for telehealth?</FormLabel>
          <RadioGroup
            aria-labelledby="telehealth-appropriate-radio-buttons-group-label"
            defaultValue="Yes"
            name="telehealth-appropriate-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>



        <FormControl>
          <FormLabel id="telehealth-consent-radio-buttons-group-label">Did you receive consent for telehealth meetings?</FormLabel>
          <RadioGroup
            aria-labelledby="telehealth-consent-radio-buttons-group-label"
            defaultValue="Yes"
            name="telehealth-consent-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>

        <Stack flexDirection='row' alignItems='center'>
          <Stack flexDirection='column' alignItems='center'>
            <Typography>Start Time</Typography>
            <TimePicker value={startTime} onChange={(time) => setStartTime(time)} />
          </Stack>
          <Stack flexDirection='column' alignItems='center'>
            <Typography>End Time</Typography>
            <TimePicker value={endTime} onChange={(time) => setEndTime(time)} />
          </Stack>
          {startTime && endTime &&
            <Typography color={calculateTimeDiff() > 0 ? 'gray' : 'red'}>Meeting length: {calculateTimeDiff()} minutes</Typography>
          }
        </Stack>

 

        <Box>
          <Typography fontWeight={400} fontSize={16} color='rgba(0, 0, 0, 0.6)'>Who was present at the meeting?</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox
              checked={clientPresent}
              onChange={(e) => setClientPresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Client" />

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={spousePresent}
                onChange={(e) => setSpousePresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Spouse"
                style={{ width: 100 }}
              />
              {spousePresent &&
                <TextField size='small' label='Spouse Name' value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
              }
            </Stack>

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={partnerPresent}
                onChange={(e) => setPartnerPresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />} label="Partner"
                style={{ width: 100 }}
              />
              {partnerPresent &&
                <TextField size='small' label='Partner Name' value={partnerName} onChange={(e) => setPartnerName(e.target.value)} />
              }
            </Stack>

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={parentPresent}
                onChange={(e) => setParentPresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Parent"
                style={{ width: 100 }}
              />
              {parentPresent &&
                <TextField size='small' label='Parent Name' value={parentName} onChange={(e) => setParentName(e.target.value)} />
              }
            </Stack>

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={siblingPresent}
                onChange={(e) => setSiblingPresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Sibling"
                style={{ width: 100 }}
              />
              {siblingPresent &&
                <TextField size='small' label='Sibling Name' value={siblingName} onChange={(e) => setSiblingName(e.target.value)} />
              }
            </Stack>

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={childPresent}
                onChange={(e) => setchildPresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Child"
                style={{ width: 100 }}
              />
              {childPresent &&
                <TextField size='small' label='Child Name' value={childName} onChange={(e) => setchildName(e.target.value)} />
              }
            </Stack>

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={otherPresent}
                onChange={(e) => setOtherPresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Other"
                style={{ width: 100 }}
              />
              {otherPresent &&
                <TextField size='small' label='Other Name' value={otherName} onChange={(e) => setOtherName(e.target.value)} />
              }
            </Stack>
          </FormGroup>
        </Box>
      </Stack>
    </Container >
  )
}

export default observer(MeetingLogistics);
