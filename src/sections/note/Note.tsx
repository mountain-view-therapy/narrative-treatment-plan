import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import CopyToClipboardButton from "../../components/CopyToClipBoardButton";
import NoteContent from "../../components/NoteContent";
import ResetStateButton from "../../components/ResetStateButton";


const Note = () => {

    return (
        <Box>
            <Stack flexDirection='row' justifyContent='space-evenly' padding={1}>
                <CopyToClipboardButton />
                <ResetStateButton />
            </Stack>
            <Box overflow='auto' border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} padding={1}>
                <NoteContent />
            </Box>
        </Box>
    )
}



export default Note