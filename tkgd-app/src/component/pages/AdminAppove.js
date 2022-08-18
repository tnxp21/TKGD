import { Box, Typography, IconButton, Button, Paper  } from '@mui/material';
import Divider from '@mui/material/Divider';
import downArrow from '../../assets/Icons/downArrow.svg';
import ok from '../../assets/Icons/ok.svg';
import decline from '../../assets/Icons/decline.svg';
import approveavt from '../../assets/avatar/approveavt.svg';



export default function AdminAppove() {
    return(
        <Box className='grid grid-cols-5'>
            <Box className='flex flex-col space-y-5 px-5 py-16' style={{backgroundColor: '#DEDADA'}}>
                <Box className='flex flex-row justify-between'>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 22}} color='black'>Quản lý</Typography>
                    <IconButton>
                        <img src={downArrow} alt="downArrow"/>  
                    </IconButton>  
                </Box>
                <Box className='flex flex-col space-y-5 px-5' style={{backgroundColor: '#DEDADA'}}>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Bài viết</Typography>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Tài khoản</Typography>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Phê duyệt</Typography>
                </Box>
                <Divider orientation="horizontal" flexItem />
                    <Typography className='text-left py-8' style={{fontWeight:600, fontSize: 22}} color='black'>Thời gian hoạt động</Typography>
                <Divider orientation="horizontal" flexItem />
                <Box className='flex flex-row justify-between'>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 22}} color='black'>Thống kê</Typography>
                    <IconButton>
                        <img src={downArrow} alt="downArrow"/>    
                    </IconButton>
                </Box>
                <Box className='flex flex-col space-y-5 px-5' style={{backgroundColor: '#DEDADA'}}>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Bài viết</Typography>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Tài khoản</Typography>
                </Box>
            </Box>
            <Paper 
                className='flex flex-col col-span-4 m-5' 
                elevation={5}
                sx={{borderRadius: '10px'}}

            >
                <Typography className='text-left p-5' style={{fontWeight:600, fontSize: 22}} color='black'>Phê duyệt bài viết</Typography>
                <Box className='grid grid-cols-6 px-8 py-5 text-white' style={{backgroundColor:'#2A3042'}}>
                    <Box>
                        <Typography  style={{fontWeight:600, fontSize: 17}}>STT</Typography>
                    </Box>
                    <Box className='col-span-2'>
                        <Typography style={{fontWeight:600, fontSize: 17}}>Bài viết</Typography>
                    </Box>
                    <Box className='col-span-3'>
                        <Typography style={{fontWeight:600, fontSize: 17}}>Phê duyệt</Typography>
                    </Box>
                </Box>
                <Box className='grid grid-row-8'>

                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>1</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>2</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>3</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>4</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>5</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>6</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>7</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-6 px-8 py-5'>
                        <Box className='flex justify-center items-center'>
                            <Typography  style={{fontWeight:600, fontSize: 17}}>8</Typography>
                        </Box>
                        <Box className='grid grid-cols-4 col-span-2 content-center'>
                            <img src={approveavt} alt="approveavt"/>  
                            <Box className='flex justify-center items-center col-span-3'>
                                <Typography className='col-span-34' style={{fontWeight:600, fontSize: 17}}>Cuộc sống của một streamer</Typography>
                            </Box>
                        </Box>
                        <Box className=' flex flex-row justify-center items-center col-span-3'>
                            <IconButton>
                                <img src={ok} alt='ok' />
                            </IconButton>
                            <IconButton>
                                <img src={decline} alt='decline' />
                            </IconButton>
                        </Box>
                    </Box>
                    
                </Box>
            </Paper>
        </Box>
    )
}