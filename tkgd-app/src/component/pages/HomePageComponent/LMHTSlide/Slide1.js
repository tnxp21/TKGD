import { Link } from 'react-router-dom';
import { Box, Typography, IconButton  } from '@mui/material';
import avt1 from '../../../../assets/avatar/LMHT1.svg'
import pic1 from '../../../../assets/Pictures/LMHT/LMHT1.svg'
import avt2 from '../../../../assets/avatar/LMHT2.svg'
import pic2 from '../../../../assets/Pictures/LMHT/LMHT2.svg'
import avt3 from '../../../../assets/avatar/LMHT3.svg'
import pic3 from '../../../../assets/Pictures/LMHT/LMHT3.svg'
import heartReact from '../../../../assets/Icons/heartReact.svg'
import bookMark from '../../../../assets/Icons/bookMark.svg'


export default function Slide1(){
    return(
        //Carousel
        <Box className='grid grid-cols-3 gap-x-16 justify-items-center'>
            {/* 1 */}
            <Box className='flex flex-col space-y-5' style={{maxHeight:'90vh', width:'100%'}}>
                <Box className='flex flex-row space-x-3'>
                    <img src={avt1} alt='avtLMHT1' />
                    <Box className='flex flex-col text-left'>
                        <Typography color='primary'>Dạ Vũ</Typography>
                        <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={pic1} alt='picLMHT1' />
                </Link>

                <Box className='text-left'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Góc tối của nghề Streamer</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                </Box>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <IconButton>
                            <img src={heartReact} alt='heartReact' />
                        </IconButton>
                        <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                    </Box>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <Typography style={{fontWeight:400, fontSize:18}}>3 phản hồi</Typography>
                        <IconButton>
                            <img src={bookMark} alt='bookMark' />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {/* 2 */}
            <Box className='flex flex-col space-y-5' style={{maxHeight:'90vh', width:'100%'}}>
                <Box className='flex flex-row space-x-3'>
                    <Link to='/personalBlog2'>
                        <img src={avt2} alt='avtLMHT1' />
                    </Link>
                    <Box className='flex flex-col text-left'>
                    <Link to='/personalBlog2'>
                        <Typography color='primary'>Phúc Lê</Typography>
                    </Link>
                        <Typography style={{textColor:'primary'}} >07.06.2022  - 10 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={pic2} alt='picLMHT2' />
                </Link>
                <Box className='text-left'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Tổng quan về mùa 7</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong xuyên suốt lịch sử phát triển của Đấu Trường Chân Lý thì những chủ lực... </Typography>
                </Box>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <IconButton>
                            <img src={heartReact} alt='heartReact' />
                        </IconButton>
                        <Typography style={{fontWeight:400, fontSize:18}}>5K</Typography>
                    </Box>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <Typography style={{fontWeight:400, fontSize:18}}>12 phản hồi</Typography>
                        <IconButton>
                            <img src={bookMark} alt='bookMark' />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {/* 3 */}
            <Box className='flex flex-col space-y-5' style={{maxHeight:'90vh', width:'100%'}}>
                <Box className='flex flex-row space-x-3'>
                    <img src={avt3} alt='avtLMHT1' />
                    <Box className='flex flex-col text-left'>
                        <Typography color='primary'>Thành Thái</Typography>
                        <Typography style={{textColor:'primary'}} >08.06.2022  - 7 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={pic3} alt='picLMHT3' />
                </Link>
                <Box className='text-left'>
                    <Link to="viewBlog">
                        <Typography style={{fontWeight:600, fontSize:22}}>Cuộc sống của một Streamer</Typography>
                    </Link>
                    <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc ... </Typography>
                </Box>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <IconButton>
                            <img src={heartReact} alt='heartReact' />
                        </IconButton>
                        <Typography style={{fontWeight:400, fontSize:18}}>5K</Typography>
                    </Box>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <Typography style={{fontWeight:400, fontSize:18}}>12 phản hồi</Typography>
                        <IconButton>
                            <img src={bookMark} alt='bookMark' />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

        </Box>
        
    );
}