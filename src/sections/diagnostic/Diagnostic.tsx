import { Button, Dialog, FormControl, NativeSelect, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { possibleDiagnosis, possibleSymptoms } from '../../state/constants';
import { getState } from '../../state/provider';


const Diagnostic = () => {
  const { treatmentPlan: {
    diagnostics: {
      diagnoses,
      addNewDiagnosis,
      removeDiagnosis,
      setDiagnoses,
      toggleSymptom,
      setOtherSymptoms,

    },
  }
  } = getState()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [removeIndex, setRemoveIndex] = useState(0)


  return (
    < Container >
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <Box padding={3}>
          <Typography>Remove Diagnoses</Typography>
          <Stack flexDirection='row' justifyContent='space-evenly' padding={3}>
            <Button
              variant='contained'
              onClick={() => {
                removeDiagnosis(removeIndex);
                setDialogOpen(false)
              }}
            >
              Yes
            </Button>
            <Button
              variant='contained'
              onClick={() => setDialogOpen(false)}
            >
              No
            </Button>
          </Stack>
        </Box>
      </Dialog>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Diagnoses</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={6} justifyContent='center' alignItems='center'>
        <Box>
          {
            diagnoses.map((diagnosis, index) => {
              return (
                <Box border={1} borderRadius={4} boxShadow={4} borderColor="gray" margin={1} padding={5} key={`diag-${index}`}>
                  <Box bgcolor="pink" borderRadius={4}>
                    <Stack flexDirection="row" justifyContent="space-between" marginBottom={1} marginLeft={20}>
                      <Typography fontSize={20} fontWeight={800} >Diagnosis {index + 1}</Typography>
                      <Button onClick={() => {setRemoveIndex(index); setDialogOpen(true)}} style={{ color: "white" }}>
                        X
                      </Button>
                    </Stack>
                  </Box>

                  <Stack flexDirection='column' alignItems='center' spacing={2} marginBottom={2}>
                    <NativeSelect
                      inputProps={{
                        name: 'diagnosis',
                        id: 'diagnosis',
                      }}
                      fullWidth
                      style={{ width: 450 }}
                      onChange={(e) => setDiagnoses(e.target.value, index)}
                      value={diagnosis.diagnosisName}
                    >
                      {possibleDiagnosis.map(diagOption =>
                        <option value={diagOption} key={diagOption}>{diagOption}</option>
                      )}
                    </NativeSelect>
                    <FormControl>
                      {diagnosis.diagnosisName === "Other"
                        ?
                        <TextField
                          style={{ margin: 3, width: 350, fontSize: 12 }}
                          value={diagnosis.otherDiagnosisName}
                          onChange={(e) => diagnosis.setDiagnosisName(e.target.value)}
                          label="Diagnosis Name"
                        />
                        :
                        //@ts-ignore*
                        possibleSymptoms[diagnosis.diagnosisName].map(symptom =>
                          <Button
                            style={{ margin: 3, fontSize: 12 }}
                            size='small'
                            variant='contained'
                            key={'anxiety-' + symptom}
                            onClick={() => toggleSymptom(symptom, index)}
                            color={diagnosis.symptoms.includes(symptom) ? 'primary' : 'inherit'}>
                            {symptom}
                          </Button>)
                      }
                    </FormControl>
                    <TextField
                      style={{ margin: 3, width: 350, fontSize: 12, marginTop: 10 }}
                      value={diagnosis.otherSymptoms}
                      onChange={(e) => setOtherSymptoms(index, e.target.value)}
                      label={`Other Symptoms`}
                    />
                  </Stack>
                </Box>
              )
            })
          }

        </Box>
      </Stack>

      <Button
        style={{ margin: 3, maxWidth: 350, fontSize: 12 }}
        size='small'
        variant='contained'
        onClick={() => addNewDiagnosis()}>
        Add new Diagnosis
      </Button>


    </Container >
  )
}

export default observer(Diagnostic);

