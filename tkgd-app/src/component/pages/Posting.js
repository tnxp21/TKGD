import { Link } from 'react-router-dom';
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import { Box, Typography, Paper, IconButton, Button  } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';


import CheckBoxIcon from '../../assets/Icons/Posting/CheckBox.svg';
import CheckedBoxIcon from '../../assets/Icons/Posting/CheckedBox.svg';
import UploadtoCloud from '../../assets/Icons/Posting/UploadtoCloud.svg';
import PreviewIcon from '../../assets/Icons/Posting/Preview.svg';
import Export from '../../assets/Icons/Posting/Export.svg';
import Undo from '../../assets/Icons/Posting/ToolBar/Undo.svg';
import Redo from '../../assets/Icons/Posting/ToolBar/Redo.svg';
import CircleA from '../../assets/Icons/Posting/ToolBar/CircleA.svg';
import Lowercase from '../../assets/Icons/Posting/ToolBar/Lowercase.svg';
import SortDropdown from '../../assets/Icons/Posting/ToolBar/SortDropdown.svg';

import Bold from '../../assets/Icons/Posting/ToolBar/Bold.svg';
import Italic from '../../assets/Icons/Posting/ToolBar/Italic.svg';
import Underline from '../../assets/Icons/Posting/ToolBar/Underline.svg';
import Strikethrough from '../../assets/Icons/Posting/ToolBar/Strikethrough.svg';
import TextColor from '../../assets/Icons/Posting/ToolBar/TextColor.svg';
import ColorDropper from '../../assets/Icons/Posting/ToolBar/ColorDropper.svg';
import LinkIcon from '../../assets/Icons/Posting/ToolBar/Link.svg';
import ImageIcon from '../../assets/Icons/Posting/ToolBar/ImageIcon.svg';
import ShowingVideoFrames from '../../assets/Icons/Posting/ToolBar/ShowingVideoFrames.svg';
import Happy from '../../assets/Icons/Posting/ToolBar/Happy.svg';
import AlignLeft from '../../assets/Icons/Posting/ToolBar/AlignLeft.svg';
import Indent from '../../assets/Icons/Posting/ToolBar/Indent.svg';
import Outdent from '../../assets/Icons/Posting/ToolBar/Outdent.svg';
import BulletList from '../../assets/Icons/Posting/ToolBar/BulletList.svg';
import NumberedList from '../../assets/Icons/Posting/ToolBar/NumberedList.svg';
import GetQuote from '../../assets/Icons/Posting/ToolBar/GetQuote.svg';
import DashedLine from '../../assets/Icons/Posting/ToolBar/DashedLine.svg';
import UpArrow from '../../assets/Icons/Posting/ToolBar/UpArrow.svg';
import DownArrow from '../../assets/Icons/Posting/ToolBar/DownArrow.svg';

import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import success from '../../assets/Icons/successPost.svg';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function CustomizedInputBase() {
    const [category, setcategory] = React.useState(0);
    const handleChange = (event) => 
    {
        setcategory(event.target.value);
    };
    const [openD, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleCloseD = () => {
    setOpen(false);
    };
    return (
        <Box className='flex flex-col my-8'>
            <Typography style={{fontWeight:600, fontSize: 30}} color='black'>Đăng bài blog mới</Typography>
            <Box className='grid grid-cols-5'>
                {/* Option bar */}
                <Box className='flex flex-col space-y-5 mx-4'>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 22}} color='black'>Cài đặt bài đăng</Typography>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Tùy chọn</Typography>
                    <FormControl component="fieldset">
                        <FormLabel className='text-left' component="legend">
                            <Typography className='text-black' style={{fontWeight:600, fontSize: 20}}> Bình luận người đọc</Typography>
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
                            value={category}
                            onChange={handleChange}
                            variant='standard'
                            disableUnderline
                            >
                            <MenuItem value={0}>
                                <Typography className='text-gray-300'>- - Chọn thể loại - -</Typography>  
                            </MenuItem>
                            <MenuItem value={1}>Tip & Tricks</MenuItem>
                            <MenuItem value={2}>Liên Minh Huyền Thoại</MenuItem>
                            <MenuItem value={3}>Review Game</MenuItem>
                            <MenuItem value={4}>Tin hot & sự kiện</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Box>
                {/* Editing */}
                <Box className='flex flex-col col-span-4'>
                    {/* header */}
                    <Box className='flex flex-col mx-5'>
                        <Box className='grid grid-cols-3'>
                            <TextField 
                                className='flex col-span-2 justify-end'
                                variant="standard" 
                                placeholder='Tiêu đề *(bắt buộc nhập)'
                                color='primary'
                            />
                            <Box className='flex flex-row space-x-5 pb-5'>
                                <IconButton>
                                    <img src={UploadtoCloud} alt='UploadtoCloud' />
                                </IconButton>
                                <Box className='flex rounded-lg border-2 border-gray-500 items-center justify-center' style={{width:'9vw', height:'50px'}}>
                                    <Button 
                                        className='flex flex-row space-x-3 w-full h-full' 
                                        style={{color:'gray'}}
                                    >
                                        <img src={PreviewIcon} alt="Preview"/>
                                        <Link to="/preview">
                                            <Typography className='text-black' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xem trước</Typography>
                                        </Link>
                                    </Button>
                                </Box>
                                {/* Dialog */}
                                <div>
                                    <Box className='flex rounded-lg items-center justify-center' bgcolor='primary.main' style={{width:'9vw', height:'50px'}}>
                                        <Button 
                                            className='flex flex-row space-x-3 w-full h-full'
                                            style={{color:'white'}}
                                            onClick={handleClickOpen}
                                        >
                                            <img src={Export} alt="Export"/>
                                            <Typography className='text-white' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xuất bản</Typography>
                                        </Button>
                                    </Box>
                                    <Dialog open={openD}>
                                        <Box className='p-5'>
                                            <DialogTitle className='flex flex-col'>
                                                <Box className='flex items-center justify-center'><img src={success} alt="success"/></Box>

                                                <Typography className="text-black text-center" style={{fontSize: 24, fontWeight: 600}}>
                                                    Chờ phê duyệt
                                                </Typography>
                                                <Typography className="text-gray-400 text-center" style={{fontSize: 14, fontWeight: 400}}>
                                                    Bài viết đã được gửi cho admin để duyệt!                            
                                                </Typography>
                                            </DialogTitle>
                                            <DialogContent className='flex flex-col justify-center space-y-5'>
                                                    <Box className='rounded-full' bgcolor='primary.main'>
                                                        <Link to="/">
                                                            <Button 
                                                                className='rounded-full mt-0 w-full flex items-center' 
                                                                onClick={handleCloseD} 
                                                            >
                                                                <Typography className='text-white' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xong</Typography>
                                                            </Button>
                                                        </Link>
                                                    </Box>
                                            </DialogContent>
                                        </Box>
                                    </Dialog>
                                </div>
                            </Box>
                        </Box>
                        {/* toolbar */}
                        <Box className='flex flex-row my-3'>
                            <Box className='grid grid-cols-2'>
                                <IconButton>
                                    <img src={Undo} alt="Undo"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Redo} alt="Redo"/>    
                                </IconButton>
                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box className='flex flex-row'>
                                <IconButton>
                                    <img src={CircleA} alt="CircleA"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Lowercase} alt="Redo"/>    
                                </IconButton>    
                                <Button style={{backgroundColor: 'white', color:'grey'}} endIcon={<img src={SortDropdown} alt="SortDropdown"/>}>
                                    <Typography className='text-left' style={{fontWeight:400, fontSize: 13, textTransform: 'none'}} color='black'>Tiêu đề nhỏ</Typography>
                                </Button> 
                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box className='grid grid-cols-6'>
                                <IconButton>
                                    <img src={Bold} alt="Bold"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Italic} alt="Italic"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Underline} alt="Underline"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Strikethrough} alt="Strikethrough"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={TextColor} alt="TextColor"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={ColorDropper} alt="ColorDropper"/>    
                                </IconButton>
                            </Box>                           
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box className='grid grid-cols-4'>
                                <IconButton>
                                    <img src={LinkIcon} alt="Link"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={ImageIcon} alt="ImageIcon"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={ShowingVideoFrames} alt="ShowingVideoFrames"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Happy} alt="Happy"/>    
                                </IconButton>                           
                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box className='grid grid-cols-3'>
                                <IconButton>
                                    <img src={AlignLeft} alt="AlignLeft"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Indent} alt="Indent"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={Outdent} alt="Outdent"/>    
                                </IconButton>                        
                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box className='grid grid-cols-4'>
                                <IconButton>
                                    <img src={BulletList} alt="BulletList"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={NumberedList} alt="NumberedList"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={GetQuote} alt="GetQuote"/>    
                                </IconButton>                        
                                <IconButton>
                                    <img src={DashedLine} alt="DashedLine"/>    
                                </IconButton>                        
                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Box className='grid grid-cols-2'>
                                <IconButton>
                                    <img src={UpArrow} alt="UpArrow"/>    
                                </IconButton>
                                <IconButton>
                                    <img src={DownArrow} alt="DownArrow"/>    
                                </IconButton>                      
                            </Box>
                        </Box>
                    </Box>
                    {/* content */}
                    <Box sx={{backgroundColor:'#F0F0F0'}}>
                        <Paper
                            className='mx-24 my-14 pl-5 pt-5'
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
