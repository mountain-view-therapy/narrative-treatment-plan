import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { renderToString } from "react-dom/server";
import NoteContent from './NoteContent';
import { observer } from 'mobx-react-lite';


const CopyToClipboardButton = () => {
    const [open, setOpen] = useState(false)

    const handleClick = async () => {
        setOpen(true)
        const html = renderToString(<NoteContent />)
        const htmlBlob = new Blob([html], { type: "text/html" })
        const textBlob = new Blob([html.replace(/<[^>]*>/g, '').replace(';ensp;', '')], { type: "text/plain" })
        const data = [
            new ClipboardItem({
                "text/html": htmlBlob,
                "text/plain": textBlob,
            }),
        ]
        await navigator.clipboard.write(data)
    }

    return (
        <>
            <Button
                variant='contained'
                onClick={handleClick}
            // disabled={!startTime || !endTime}
            >
                Copy Plan
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