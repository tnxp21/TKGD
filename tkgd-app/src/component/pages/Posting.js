import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import { Box, Typography, Paper, IconButton, Button  } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import CheckBoxIcon from '../../assets/Icons/Posting/CheckBox.svg';
import CheckedBoxIcon from '../../assets/Icons/Posting/CheckedBox.svg';
import UploadtoCloud from '../../assets/Icons/Posting/UploadtoCloud.svg';
import Preview from '../../assets/Icons/Posting/Preview.svg';
import Export from '../../assets/Icons/Posting/Export.svg';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function CustomizedInputBase() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => 
    {
        setAge(event.target.value);
    };

    return (
        <Box className='flex flex-col'>
            <Typography style={{fontWeight:600, fontSize: 30}} color='black'>Đăng bài blog mới</Typography>
            <Box className='grid grid-cols-5'>
                {/* Option bar */}
                <Box className='flex flex-col space-y-5 mx-4'>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 22}} color='black'>Cài đặt bài đăng</Typography>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Tùy chọn</Typography>
                    <FormControl component="fieldset">
                        <FormLabel className='text-left' style={{fontWeight:600, fontSize: 20}}  component="legend">
                            Bình luận người đọc
                        </FormLabel>
                        <FormGroup aria-label="position" col>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox {...label} 
                                    icon={<img src={CheckBoxIcon} alt='avt' />} 
                                    checkedIcon={<img src={CheckedBoxIcon} alt='avt' />} />}
                                label="Cho phép"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="top"
                                control={<Checkbox {...label} 
                                    icon={<img src={CheckBoxIcon} alt='avt' />} 
                                    checkedIcon={<img src={CheckedBoxIcon} alt='avt' />} />}
                                label="Không cho phép, chỉ hiển thị"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="top"
                                control={<Checkbox {...label} 
                                    icon={<img src={CheckBoxIcon} alt='avt' />} 
                                    checkedIcon={<img src={CheckedBoxIcon} alt='avt' />} />}
                                label="Không cho phép, ẩn bình luận"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 22}} color='black'>Loại</Typography>
                    <Paper 
                        elevation={2}
                        className='flex items-center'
                        sx={{borderRadius: '10px', height:'40px'}}
                    >
                        <FormControl fullWidth>
                            <Select
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            variant='standard'
                            disableUnderline
                            >
                            <MenuItem value={0}>Tip & Tricks</MenuItem>
                            <MenuItem value={1}>Liên Minh Huyền Thoại</MenuItem>
                            <MenuItem value={2}>Review Game</MenuItem>
                            <MenuItem value={3}>Tin hot & sự kiện</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Box>
                {/* Editing */}
                <Box className='flex flex-col col-span-4'>
                    <Box className='grid grid-cols-3 content-end'>
                        <TextField 
                            className='flex col-span-2 justify-center'
                            variant="standard" 
                            placeholder="Tiêu đề *(bắt buộc nhập)"
                            color='primary'
                        />
                        <Box className='flex flex-row space-x-5'>
                            <IconButton>
                                <img src={UploadtoCloud} alt='UploadtoCloud' />
                            </IconButton>
                            <Box className='flex rounded-md border-2 border-gray-500' >
                                <Button 
                                    className='flex flex-row space-x-3' 
                                    style={{color:'gray'}}

                                >
                                    <img src={Preview} alt="Preview"/>
                                    <Typography className='text-black' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xem trước</Typography>
                                </Button>
                            </Box>
                            <Box className='flex rounded-md' bgcolor='primary.main'>
                                <Button 
                                    className='flex flex-row space-x-3'
                                    style={{color:'white'}}
                                >
                                    <img src={Export} alt="Export"/>
                                    <Typography className='text-black' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xuất bản</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    
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
