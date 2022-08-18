import { Box, Typography, IconButton, Paper  } from '@mui/material';
import { Link } from 'react-router-dom';
import avt from '../../../assets/avatar/BlogList1.svg';
import blogListThumbnail from '../../../assets/Pictures/BlogList/blogListThumbnail.svg'
import blogListThumbnail2 from '../../../assets/Pictures/BlogList/blogListThumbnail2.svg'
import avt1 from '../../../assets/avatar/LMHT4.svg'
import avt2 from '../../../assets/avatar/LMHT5.svg'
import avt3 from '../../../assets/avatar/LMHT6.svg'
import heartReact from '../../../assets/Icons/heartReact.svg';
import bookMark from '../../../assets/Icons/bookMark.svg'

export default function Slide1(){
    return(
        <Box className='grid grid-rows-4 gap-y-14'>
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
                        <Typography style={{fontWeight:400, fontSize:18}}>3 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt1} alt='avt1' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Phúc Lê</Typography>
                        <Typography style={{textColor:'primary'}} >07.06.2022  - 10 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={blogListThumbnail2} alt='blogListThumbnail2' />
                </Link>
                <Box className='text-left space-y-5'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Tổng quan về mùa 7</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong xuyên suốt lịch sử phát triển của Đấu Trường Chân Lý thì những chủ lực...</Typography>
                    
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
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt2} alt='avt2' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Tài Anh</Typography>
                        <Typography style={{textColor:'primary'}} >07.08.2022  - 25 phút đọc</Typography>
                    </Box>
                </Box>
                <img src={blogListThumbnail} alt='blogListThumbnail' />
                <Box className='text-left space-y-5'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Bài hát cho chung kết thế giới</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong xuyên suốt lịch sử phát triển của Đấu Trường Chân Lý thì những chủ lực...</Typography>
                    
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
                            <Typography style={{fontWeight:400, fontSize:18}}>4K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>51 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-5' 
                elevation={5}
                sx={{borderRadius: '30px'}}
            >
                <Box className='flex flex-row space-x-3'>
                    <img src={avt3} alt='avt3' />
                    <Box className='flex flex-col text-left'>
                        <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Thái Công</Typography>
                        <Typography style={{textColor:'primary'}} >08.06.2022  - 7 phút đọc</Typography>
                    </Box>
                </Box>
                <img src={blogListThumbnail2} alt='blogListThumbnail2' />
                <Box className='text-left space-y-5'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Virus ra mắt công nghệ mới</Typography>
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
                            <Typography style={{fontWeight:400, fontSize:18}}>3.3K</Typography>
                        </Box>
                        <Typography style={{fontWeight:400, fontSize:18}}>22 phản hồi</Typography>
                    </Box>
                    <IconButton>
                        <img src={bookMark} alt='bookMark' />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
}