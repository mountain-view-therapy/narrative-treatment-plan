import { Checkbox, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleEffectsOnFunctions } from '../../state/constants';
import { getState } from '../../state/provider';

const Functioning = () => {
  const { treatmentPlan: {
    planLogistics: {
      clientInitials,
      setClientInitials,
    },
    functioning: {
      selfCareAffected,
      selfCareSymptoms,
      otherSelfCareSymptoms,
      occupationAffected,
      occupationSymptoms,
      otherOccupationSymptoms,
      academicAffected,
      academicSymptoms,
      otherAcademicSymptoms,
      interpersonalAffected,
      interpersonalSymptoms,
      otherInterpersonalSymptoms,
      communitylAffected,
      communitySymptoms,
      otherCommunitySymptoms,
      setSelfCareAffected,
      setSelfCareSymptom,
      setOtherSelfCareSymptoms,
      setOccupationAffected,
      setOccupationSymptom,
      setOtherOccupationSymptoms,
      setAcademicAffected,
      setAcademicSymptom,
      setOtherAcademicSymptoms,
      setInterpersonalAffected,
      setInterpersonalSymptom,
      setOtherInterpersonalSymptoms,
      setCommunityAffected,
      setCommunitySymptom,
      setOtherCommunitySymptoms,
    },
  }
  } = getState()

  const replaceText = (text: string) => {
    return text.replace('[CLIENT]', clientInitials)
  }

  return (
    < Container >
        <Stack>
          <Box>
            <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
              <Typography fontWeight={800} fontSize={24}>Effects on Functioning</Typography>
            </Stack>
          </Box>

          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />


          <FormControlLabel control={<Checkbox
            checked={selfCareAffected}
            onChange={(e) => setSelfCareAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Self Care" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleEffectsOnFunctions.selfCare.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={selfCareAffected && Boolean(selfCareSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setSelfCareSymptom(symptom, e.target.checked)}
                disabled={!selfCareAffected}

              />} label={replaceText(symptom)} key={'sc-' + symptom} />
            )}
            <FormLabel>Other Self Care Symptoms</FormLabel>
            <TextField disabled={!selfCareAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherSelfCareSymptoms || clientInitials} onChange={(e) => setOtherSelfCareSymptoms(e.target.value)} />
          </Stack>


          <FormControlLabel control={<Checkbox
            checked={occupationAffected}
            onChange={(e) => setOccupationAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Occupational" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleEffectsOnFunctions.occupation.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={occupationAffected && Boolean(occupationSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setOccupationSymptom(symptom, e.target.checked)}
                disabled={!occupationAffected}

              />} label={replaceText(symptom)} key={'pos-' + symptom} />
            )}
            <FormLabel>Other Occupational Symptoms</FormLabel>
            <TextField disabled={!occupationAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherOccupationSymptoms || clientInitials} onChange={(e) => setOtherOccupationSymptoms(e.target.value)} />
          </Stack>

          <FormControlLabel control={<Checkbox
            checked={academicAffected}
            onChange={(e) => setAcademicAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Academic" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleEffectsOnFunctions.academic.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={academicAffected && Boolean(academicSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setAcademicSymptom(symptom, e.target.checked)}
                disabled={!academicAffected}

              />} label={replaceText(symptom)} key={'pas-' + symptom} />
            )}
            <FormLabel>Other Academic Symptoms</FormLabel>
            <TextField disabled={!academicAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherAcademicSymptoms || clientInitials} onChange={(e) => setOtherAcademicSymptoms(e.target.value)} />
          </Stack>

          <FormControlLabel control={<Checkbox
            checked={interpersonalAffected}
            onChange={(e) => setInterpersonalAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Interpersonal" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleEffectsOnFunctions.interpersonal.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={interpersonalAffected && Boolean(interpersonalSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setInterpersonalSymptom(symptom, e.target.checked)}
                disabled={!interpersonalAffected}

              />} label={replaceText(symptom)} key={'pis-' + symptom} />
            )}
            <FormLabel>Other Interpersonal Symptoms</FormLabel>
            <TextField disabled={!interpersonalAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherInterpersonalSymptoms || clientInitials} onChange={(e) => setOtherInterpersonalSymptoms(e.target.value)} />
          </Stack>

          <FormControlLabel control={<Checkbox
            checked={communitylAffected}
            onChange={(e) => setCommunityAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Community" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleEffectsOnFunctions.community.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={communitylAffected && Boolean(communitySymptoms.find(selected => symptom === selected))}
                onChange={(e) => setCommunitySymptom(symptom, e.target.checked)}
                disabled={!communitylAffected}

              />} label={replaceText(symptom)} key={'pcs' + symptom} />
            )}
            <FormLabel>Other Community Symptoms</FormLabel>
            <TextField disabled={!communitylAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherCommunitySymptoms || clientInitials} onChange={(e) => setOtherCommunitySymptoms(e.target.value)} />
          </Stack>
      </Stack>
    </Container >
  )
}

export default observer(Functioning);
