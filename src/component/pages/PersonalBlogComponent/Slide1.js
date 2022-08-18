import { Box, Typography, IconButton, Paper  } from '@mui/material';
import { Link } from 'react-router-dom';
import blogListThumbnail from '../../../assets/Pictures/BlogList/blogListThumbnail.svg'
import blogListThumbnail2 from '../../../assets/Pictures/BlogList/blogListThumbnail2.svg'
import heartReact from '../../../assets/Icons/heartReact.svg';

export default function Slide1(props){
    return(
        <Box className='grid grid-rows-4 gap-y-14'>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={props.miniavt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>{props.name}</Typography>
                        <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={blogListThumbnail} alt='blogListThumbnail' />
                </Link>
                <Box className='text-left space-y-5'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Góc tối của nghề Streamer</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                    
                </Box>
                <Link to="viewBlog">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={props.saved} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={props.miniavt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>{props.name}</Typography>
                        <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={blogListThumbnail2} alt='blogListThumbnail2' />
                </Link>
                <Box className='text-left space-y-5'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Tổng quan về mùa 7</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong xuyên suốt lịch sử phát triển của Đấu Trường Chân Lý thì những chủ lực những team mạnh...</Typography>
                    
                </Box>
                <Link to="viewBlog">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>5K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>12 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={props.saved} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={props.miniavt} alt='props.miniavt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>{props.name}</Typography>
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
                <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>3K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>81 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={props.saved} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={props.miniavt} alt='avt' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>{props.name}</Typography>
                        <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={blogListThumbnail2} alt='blogListThumbnail2' />
                </Link>
                <Box className='text-left space-y-5'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Tổng quan về mùa 7</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong xuyên suốt lịch sử phát triển của Đấu Trường Chân Lý thì những chủ lực những team mạnh...</Typography>
                    
                </Box>
                <Link to="viewBlog">
                        <Typography className='text-left' style={{fontWeight:600, fontSize:22}}>Đọc thêm...</Typography>
                </Link>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                <Box className='flex flex-row space-x-14 items-center'>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={heartReact} alt='heartReact' />
                            </IconButton>
                            <Typography style={{fontWeight:400, fontSize:18}}>5K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>12 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={props.saved} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
}