import { Link } from 'react-router-dom';
import { Box, Typography} from "@mui/material";
import rightArrow from '../assets/Icons/rightArrow.svg';
import { Button } from './customComponent/Button';
import FooterImage from '../assets/Pictures/Footer.svg';
import footerLogo from '../assets/Icons/footerLogo.svg';
import fb from '../assets/Icons/facebook.svg';
import zl from '../assets/Icons/zalo.svg';
import ins from '../assets/Icons/instagram.svg';
import tele from '../assets/Icons/telegram.svg';


export default function Footer(){
    return (
        <Box className='flex flex-col' style={{width:'100%'}}>
            {/* đăng bài */}
            <Box className='flex flex-col justify-center items-center space-y-10' 
            style={{
                        height: '418px',
                        backgroundImage: `url(${FooterImage})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '101%', 
                        backgroundPosition: 'center',
                    }}>
                <Typography style={{fontWeight: 600, fontSize: 30, color: 'white'}}>Hãy tham gia với chúng tôi !</Typography>
                <Box className='flex flex-col'>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: 'white'}}>Đây là nơi chia sẻ các kiến thức về game,</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: 'white'}}>còn là nơi phát triển, nuôi dưỡng niềm đam mê của bạn</Typography>
                </Box>
                <Link to="/posting">
                    <Button className="flex flex-row space-x-3 justify-center items-center" style={{height:'64px', width:'15vw'}} variant='contained'>
                        <Typography style={{fontSize: 18, textTransform: 'none'}}>Đăng bài</Typography>
                        <img src={rightArrow} alt='rightArrow' />
                    </Button>
                </Link>
            </Box>
            {/* about us */}
            <Box className='flex flex-col justify-center space-y-5 pt-16 pb-5' bgcolor='primary.main'>
                <div className='flex justify-center'>
                    <img src={footerLogo} alt='footerLogo' />
                </div>
                <Box className='border-t-black border-t-2 flex flex-col justify-center mx-20 pt-8 space-y-8'>
                    <Typography style={{fontWeight:600, fontSize: 25}}>Về chúng tôi</Typography>
                    <Box className='grid grid-cols-2'>
                        <Box className='flex flex-col space-y-5 border-r-black border-r-2 flex-grow'>
                            <Typography style={{fontWeight:600, fontSize: 25}}>Hợp tác nội dung</Typography>
                            <Typography style={{fontWeight:400, fontSize: 22}}>Email: info@ghub.com</Typography>
                            <Typography style={{fontWeight:400, fontSize: 22}}>Phone: 0908 900 484</Typography>
                        </Box>
                        <Box className='flex flex-col space-y-5 flex-grow'>
                            <Typography style={{fontWeight:600, fontSize: 25}}>Liên hệ quảng cáo</Typography>
                            <Typography style={{fontWeight:400, fontSize: 22}}>Email: marketing@ghub.com</Typography>
                            <Typography style={{fontWeight:400, fontSize: 22}}>Phone: 0908 900 484</Typography>
                        </Box>
                    </Box>
                    <Box className='flex flex-row space-x-16 self-center'>
                        <img src={fb} alt='footerLogo' />
                        <img src={ins} alt='footerLogo' />
                        <img src={zl} alt='footerLogo' />
                        <img src={tele} alt='footerLogo' />

                    </Box>
                    <Typography style={{fontWeight:400, fontSize: 18}}>Copyright © 2022. All Right Reserved.</Typography>

                </Box>
            </Box>
        </Box>
    );
}