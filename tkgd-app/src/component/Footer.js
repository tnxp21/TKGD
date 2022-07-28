import { Box, Typography, IconButton } from "@mui/material";
import rightArrow from '../assets/Icons/rightArrow.svg';
import { Button } from './customComponent/Button';

export default function Footer(){
    return (
        <Box className='flex flex-col justify-center items-center space-y-10' style={{height: '418px'}}>
            <Typography style={{fontWeight: 600, fontSize: 30}}>Hãy tham gia với chúng tôi !</Typography>
            <Box className='flex flex-col'>
                <Typography style={{fontWeight: 400, fontSize: 18}}>Đây là nơi chia sẻ các kiến thức về game,</Typography>
                <Typography style={{fontWeight: 400, fontSize: 18}}>còn là nơi phát triển, nuôi dưỡng niềm đam mê của bạn</Typography>
            </Box>
            <Box  className='flex justify-end'>
                <Button style={{height:'64px', width:'15vw'}} variant='contained'>
                    <Typography style={{fontSize: 18, textTransform: 'none'}}>Các bài blog khác</Typography>
                    <IconButton>
                            <img src={rightArrow} alt='rightArrow' />
                    </IconButton>
                </Button>
            </Box>
        </Box>
    );
}