import {Box, Typography, IconButton, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import avt from '../../assets/avatar/LMHT1.svg';
import blogListThumbnail from '../../assets/Pictures/blogListThumbnail.svg'
import heartReact from '../../assets/Icons/heartReact.svg';
import bookMark from '../../assets/Icons/bookMark.svg';
import rightArrowBold from '../../assets/Icons/rightArrowBold.svg';

export default function BlogList()
{
    return(
        <Box className='flex flex-col space-y-14 mx-7 my-14'>
            {/* title */}
            <Typography className="text-black text-left" style={{fontWeight:700, fontSize: 30}}>Liên Minh Huyền thoại</Typography>
            {/* list */}
            <Box 
                className='grid grid-rows-4 gap-y-14 mx-32'
            >
                <Paper 
                    className='flex flex-col space-y-5 px-14 py-5' 
                    elevation={5}
                    sx={{borderRadius: '30px'}}
                >
                    <Box className='flex flex-row space-x-3'>
                        <img src={avt} alt='avt' />
                        <Box className='flex flex-col text-left'>
                            <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Minh Đăng</Typography>
                            <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                        </Box>
                    </Box>
                    <img src={blogListThumbnail} alt='blogListThumbnail' />
                    <Box className='text-left space-y-5'>
                        <Typography style={{fontWeight:600, fontSize:22}}>Góc tối của nghề Streamer</Typography>
                        <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                        
                    </Box>
                    <Link href="#">
                            <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                    </Link>
                    <Box className='flex flex-grow items-end flex-row justify-between '>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                            <IconButton>
                                <img src={bookMark} alt='bookMark' />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
                <Paper 
                    className='flex flex-col space-y-5 px-14 py-5' 
                    elevation={5}
                    sx={{borderRadius: '30px'}}
                >
                    <Box className='flex flex-row space-x-3'>
                        <img src={avt} alt='avt' />
                        <Box className='flex flex-col text-left'>
                            <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Minh Đăng</Typography>
                            <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                        </Box>
                    </Box>
                    <img src={blogListThumbnail} alt='blogListThumbnail' />
                    <Box className='text-left space-y-5'>
                        <Typography style={{fontWeight:600, fontSize:22}}>Góc tối của nghề Streamer</Typography>
                        <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                        
                    </Box>
                    <Link href="#">
                            <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                    </Link>
                    <Box className='flex flex-grow items-end flex-row justify-between '>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                            <IconButton>
                                <img src={bookMark} alt='bookMark' />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
                <Paper 
                    className='flex flex-col space-y-5 px-14 py-5' 
                    elevation={5}
                    sx={{borderRadius: '30px'}}
                >
                    <Box className='flex flex-row space-x-3'>
                        <img src={avt} alt='avt' />
                        <Box className='flex flex-col text-left'>
                            <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Minh Đăng</Typography>
                            <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                        </Box>
                    </Box>
                    <img src={blogListThumbnail} alt='blogListThumbnail' />
                    <Box className='text-left space-y-5'>
                        <Typography style={{fontWeight:600, fontSize:22}}>Góc tối của nghề Streamer</Typography>
                        <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                        
                    </Box>
                    <Link href="#">
                            <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                    </Link>
                    <Box className='flex flex-grow items-end flex-row justify-between '>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                            <IconButton>
                                <img src={bookMark} alt='bookMark' />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
                <Paper 
                    className='flex flex-col space-y-5 px-14 py-5' 
                    elevation={5}
                    sx={{borderRadius: '30px'}}
                >
                    <Box className='flex flex-row space-x-3'>
                        <img src={avt} alt='avt' />
                        <Box className='flex flex-col text-left'>
                            <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Minh Đăng</Typography>
                            <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                        </Box>
                    </Box>
                    <img src={blogListThumbnail} alt='blogListThumbnail' />
                    <Box className='text-left space-y-5'>
                        <Typography style={{fontWeight:600, fontSize:22}}>Góc tối của nghề Streamer</Typography>
                        <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                        
                    </Box>
                    <Link href="#">
                            <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                    </Link>
                    <Box className='flex flex-grow items-end flex-row justify-between '>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                            <IconButton>
                                <img src={bookMark} alt='bookMark' />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
                {/* Paging */}
                <Box className='grid grid-cols-9 px-14 place-items-center'>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{height:'5vw', width:'5vw'}} bgcolor='primary.main'>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>1</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>2</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>3</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>4</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>5</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>6</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>7</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <Typography style={{color:'black', fontWeight:400, fontSize:28}}>8</Typography>
                        </Box>
                    </IconButton>
                    <IconButton className='rounded-full'>
                        <Box className='flex justify-center items-center rounded-full' style={{backgroundColor: '#D9D9D9', height:'5vw', width:'5vw'}}>
                            <img src={rightArrowBold} alt='rightArrowBold' />
                        </Box>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}