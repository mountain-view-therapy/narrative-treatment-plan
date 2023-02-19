import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import TurndownService from 'turndown'
import { renderToString } from "react-dom/server";
import NoteContent from './NoteContent';
import { observer } from 'mobx-react-lite';
import { getState } from '../state/provider';

const turndownService = new TurndownService()

const CopyToClipboardButton = () => {
    const [open, setOpen] = useState(false)
    const { meetingInformation: {
        meetingLogistics: {
            startTime,
            endTime,
        }
    } } = getState();
    const handleClick = () => {
        setOpen(true)
        const html = renderToString(<NoteContent />)
        const markdown = turndownService.turndown(html)
        navigator.clipboard.writeText(markdown)
    }

    return (
        <>
            <Button
                variant='contained'
                onClick={handleClick}
                disabled={!startTime || !endTime}
                >
                Copy Note
            </Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}

export default observer(CopyToClipboardButton)