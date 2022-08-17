import {Box, Typography, IconButton } from '@mui/material';

export default function IndicatorIcon ()
{           
    return(
        <IconButton className='rounded-full'>
            <Box className='flex justify-center items-center rounded-full' style={{height:'5vw', width:'5vw'}} bgcolor='primary.main'>
                <Typography style={{color:'black', fontWeight:400, fontSize:28}}>1</Typography>
            </Box>
        </IconButton>
    )
}