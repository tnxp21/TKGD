import { Box, Typography } from '@mui/material';
import avt1 from '../../../../assets/avatar/TopWritter1.svg';
import avt2 from '../../../../assets/avatar/TopWritter2.svg';
import avt3 from '../../../../assets/avatar/TopWritter3.svg';
import avt4 from '../../../../assets/avatar/TopWritter4.svg';
import fb from '../../../../assets/Icons/facebook.svg';
import zl from '../../../../assets/Icons/zalo.svg';
import ins from '../../../../assets/Icons/instagram.svg';

export default function Slide1(){
    return(
        <Box className='grid grid-cols-4 gap-y-10 justify-items-center'>
            <Box className='flex flex-col space-y-2' style={{width:'100%'}}>
                <div className='flex justify-center'><img src={avt1} alt='avtTopWritter1' /></div>
                <Typography style={{fontWeight:600, fontSize: 22}} color='primary'>Phúc Lê</Typography>
                <Typography >101k lượt tim</Typography>
                <Typography >505 lượt phản hồi</Typography>
                <Box className='grid grid-cols-3 justify-items-center px-16'>
                <img src={fb} alt='fb' />
                <img src={zl} alt='zl' />
                <img src={ins} alt='ins' />
                </Box>
            </Box>

            <Box className='flex flex-col space-y-2' style={{width:'100%'}}>
                <div className='flex justify-center'><img src={avt2} alt='avtTopWritter2' /></div>
                <Typography style={{fontWeight:600, fontSize: 22}} color='primary'>Minh Tuấn</Typography>
                <Typography >10k lượt tim</Typography>
                <Typography >300 lượt phản hồi</Typography>
                <Box className='grid grid-cols-3 justify-items-center px-16'>
                <img src={fb} alt='fb' />
                <img src={zl} alt='zl' />
                <img src={ins} alt='ins' />
                </Box>
            </Box>

            <Box className='flex flex-col space-y-2' style={{width:'100%'}}>
                <div className='flex justify-center'><img src={avt3} alt='avtTopWritter3' /></div>
                <Typography style={{fontWeight:600, fontSize: 22}} color='primary'>Thành Đạt</Typography>
                <Typography >155 lượt tim</Typography>
                <Typography >505 lượt phản hồi</Typography>
                <Box className='grid grid-cols-3 justify-items-center px-16'>
                    <img src={fb} alt='fb' />
                    <img src={zl} alt='zl' />
                    <img src={ins} alt='ins' />
                </Box>
            </Box>

            <Box className='flex flex-col space-y-2' style={{width:'100%'}}>
                <div className='flex justify-center'><img src={avt4} alt='avtTopWritter4' /></div>
                <Typography style={{fontWeight:600, fontSize: 22}} color='primary'>Nguyễn Thái Hưng</Typography>
                <Typography >100 lượt tim</Typography>
                <Typography >505 lượt phản hồi</Typography>
                <div className='grid grid-cols-3 justify-items-center px-16'>
                    <img src={fb} alt='fb' />
                    <img src={zl} alt='zl' />
                    <img src={ins} alt='ins' />
                </div>
            </Box>
        </Box>
    );
}