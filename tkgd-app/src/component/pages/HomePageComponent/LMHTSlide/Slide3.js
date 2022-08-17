import { Link } from 'react-router-dom';
import { Box, Typography, IconButton  } from '@mui/material';
import avt1 from '../../../../assets/avatar/LMHT7.svg'
import pic1 from '../../../../assets/Pictures/LMHT/LMHT7.svg'
import avt2 from '../../../../assets/avatar/LMHT8.svg'
import pic2 from '../../../../assets/Pictures/LMHT/LMHT8.svg'
import avt3 from '../../../../assets/avatar/LMHT9.svg'
import pic3 from '../../../../assets/Pictures/LMHT/LMHT9.svg'
import heartReact from '../../../../assets/Icons/heartReact.svg'
import bookMark from '../../../../assets/Icons/bookMark.svg'

export default function Slide3(){
    return(
        //Carousel
        <Box className='grid grid-cols-3 gap-x-16 justify-items-center'>
            {/* 1 */}
            <Box className='flex flex-col space-y-5' style={{maxHeight:'90vh', width:'100%'}}>
                <Box className='flex flex-row space-x-3'>
                    <img src={avt1} alt='avtLMHT1' />
                    <Box className='flex flex-col text-left'>
                        <Typography color='primary'>Xuân Anh</Typography>
                        <Typography style={{textColor:'primary'}} >05.10.2022  - 7 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={pic1} alt='picLMHT1' />
                </Link>
                <Box className='text-left'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Góc chơi game mơ ước</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                </Box>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <IconButton>
                            <img src={heartReact} alt='heartReact' />
                        </IconButton>
                        <Typography style={{fontWeight:400, fontSize:18}}>1.3K</Typography>
                    </Box>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <Typography style={{fontWeight:400, fontSize:18}}>10 phản hồi</Typography>
                        <IconButton>
                            <img src={bookMark} alt='bookMark' />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {/* 2 */}
            <Box className='flex flex-col space-y-5' style={{maxHeight:'90vh', width:'100%'}}>
                <Box className='flex flex-row space-x-3'>
                    <img src={avt2} alt='avtLMHT1' />
                    <Box className='flex flex-col text-left'>
                        <Typography color='primary'>Mai Thanh</Typography>
                        <Typography style={{textColor:'primary'}} >07.05.2022  - 25 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={pic2} alt='picLMHT2' />
                </Link>
                <Box className='text-left'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Liên quân ra mắt chế độ mới</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Trong xuyên suốt lịch sử phát triển của Đấu Trường Chân Lý thì những chủ lực đội bạn sẽ... </Typography>
                </Box>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <IconButton>
                            <img src={heartReact} alt='heartReact' />
                        </IconButton>
                        <Typography style={{fontWeight:400, fontSize:18}}>5K</Typography>
                    </Box>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <Typography style={{fontWeight:400, fontSize:18}}>15 phản hồi</Typography>
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
                        <Typography color='primary'>Minh Tài</Typography>
                        <Typography style={{textColor:'primary'}} >08.08.2022  - 9 phút đọc</Typography>
                    </Box>
                </Box>
                <Link to="viewBlog">
                    <img src={pic3} alt='picLMHT3' />
                </Link>
                <Box className='text-left'>
                    <Typography style={{fontWeight:600, fontSize:22}}>Tiệm net 24/7 mới mở</Typography>
                    <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc ... </Typography>
                </Box>
                <Box className='flex flex-grow items-end flex-row justify-between '>
                    <Box className='flex flex-row space-x-2 items-center'>
                        <IconButton>
                            <img src={heartReact} alt='heartReact' />
                        </IconButton>
                        <Typography style={{fontWeight:400, fontSize:18}}>3.2K</Typography>
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