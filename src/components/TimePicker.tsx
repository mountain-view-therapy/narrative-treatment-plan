import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { Box, Stack } from "@mui/system"


export interface TimePickerProps {
    value: string;
    onChange: (time: string) => void;
}

const TimePicker = ({ value, onChange }: TimePickerProps) => {
    const  result = value.match(/(\d\d):(\d\d) ([A,P]M)/);

    let [match, hour, minute, ampm] = [' ', '12', '00', 'AM']

    if (result && result?.length > 3) {
        [match, hour, minute, ampm] = result || []

    }

    console.log({match, hour, minute, ampm})

    const handleChangeHour = (event: SelectChangeEvent) => {
        onChange(event.target.value + ":" + minute + " " + ampm)
    };
    const handleChangeMinute = (event: SelectChangeEvent) => {
        onChange(hour + ":" + event.target.value + " " + ampm)
    };
    const handleChangeAmPm = (event: SelectChangeEvent) => {
        onChange(hour + ":" + minute + " " + event.target.value)
    };

    return (
        <Box border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} padding={1} >
            <Stack flexDirection='row'>
                <Select
                    value={hour}
                    id="Hour"
                    onChange={handleChangeHour}
                    size='small'
                    fullWidth
                >
                    {
                        Array.from(Array(12).keys()).map(i => (i + 1).toString().padStart(2, '0')).map(hour => <MenuItem value={hour} key={"h" + hour}>{hour}</MenuItem>)
                    }

                </Select>
                <Select
                    value={minute}
                    id="Minute"
                    onChange={handleChangeMinute}
                    size='small'
                    fullWidth
                >
                    {
                        Array.from(Array(60).keys()).map(i => i.toString().padStart(2, '0')).map(minute => <MenuItem value={minute} key={"m" + minute}>{minute}</MenuItem>)
                    }
                </Select>
                <Select
                    value={ampm}
                    id="AMPM"
                    onChange={handleChangeAmPm}
                    size='small'
                    fullWidth

                >
                    <MenuItem value='AM' key='AM'>AM</MenuItem>
                    <MenuItem value='PM' key='PM'>PM</MenuItem>
                </Select>
            </Stack>
        </Box>
    )

}

export default TimePicker