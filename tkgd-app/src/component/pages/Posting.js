import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';

import { Box, Typography, Paper  } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Box className='flex flex-col'>
        <Typography style={{fontWeight:600, fontSize: 30}} color='black'>Đăng bài blog mới</Typography>

        <Box className='grid grid-cols-5'>
            <Box className='flex flex-col'>
                <Typography style={{fontWeight:400, fontSize: 22}} color='black'>Cài đặt bài đăng</Typography>

            </Box>
            <Box className='flex flex-col col-span-4'>
                <TextField 
                    variant="standard" 
                    placeholder="Tiêu đề *(bắt buộc nhập)"
                    color='primary'
                />
                <Box  sx={{backgroundColor:'#F0F0F0'}}>
                    <Paper
                        className='mx-24 my-14'
                        component="form"
                        >
                        <InputBase
                            sx={{ height:'100%' }}
                            placeholder="Nội dung bài blog *(bắt buộc nhập)"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            multiline
                            fullWidth
                            rows={80}
                        />
                    </Paper>
                </Box>
            </Box>
        </Box>
    </Box>
    
  );
}
