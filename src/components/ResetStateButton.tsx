import { Button, Dialog, Snackbar, Typography } from '@mui/material'
import { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { getState } from '../state/provider';
import { Box, Stack } from '@mui/system';
import { useNavigate } from "react-router-dom";


const ResetStateButton = () => {

    const { resetNoteState } = getState()
    const [snackBarOpen, setSnackbarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const nav = useNavigate();


    const handleClick = () => {
        nav("/plan-logistics");

        resetNoteState()
        setSnackbarOpen(true)
        setDialogOpen(false)

    }

    return (
        <>
            <Button variant='contained' onClick={() => setDialogOpen(true)}>Reset Plan</Button>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            >
                <Box padding={3}>
                    <Typography>Do you really want to reset the note and lose any changes?</Typography>
                    <Stack flexDirection='row' justifyContent='space-evenly' padding={3}>
                        <Button
                            variant='contained'
                            onClick={() => handleClick()}
                        >
                            Reset Plan
                        </Button>
                        <Button
                            variant='contained'
                            onClick={() => setDialogOpen(false)}
                        >
                            Dont Reset Plan
                        </Button>
                    </Stack>
                </Box>
            </Dialog>
            <Snackbar
                open={snackBarOpen}
                onClose={() => setSnackbarOpen(false)}
                autoHideDuration={2000}
                message="Note has been reset"
            />
        </>
    )
}

export default observer(ResetStateButton)