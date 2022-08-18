import { Link } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import downArrow from '../../assets/Icons/downArrow.svg';
import logo from '../../assets/Icons/logo.svg';
import adminBG from '../../assets/Pictures/adminBG.svg';



export default function Admin() {
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
                    <Link to="/approve">
                        <Typography className='text-left' style={{fontWeight:600, fontSize: 20}} color='black'>Phê duyệt</Typography>
                    </Link>
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
            <Box 
                className='col-span-4 flex justify-center items-center' 
                style={{
                    backgroundImage: `url(${adminBG})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '101%',
                    backgroundPosition: 'center',
                }}
            >
                <Box className='grid-row-2'>
                    <Box className='flex items-center justify-center'>
                        <img src={logo} alt="logo"/>
                    </Box>
                    <Typography className='text-left' style={{fontWeight:600, fontSize: 48}} color='black'>Quản lí trang web</Typography>
                </Box>
            </Box>
        </Box>
    )
}