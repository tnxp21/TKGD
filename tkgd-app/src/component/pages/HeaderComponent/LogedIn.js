import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import LogoutCircle from '../../../assets/Icons/LogoutCircle.svg'
import bookMarkCircle from '../../../assets/Icons/bookMarkCircle.svg'
import accountSettingCircle from '../../../assets/Icons/accountSettingCircle.svg'
import avatar from '../../../assets/Icons/avatar.svg';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function LogedIn()
{
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return(
        <Box>
            <IconButton
                aria-controls={open2 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                onClick={handleClick2}
            >
                <img src={avatar} alt="avatar" style={{width:40, height:40}} />
            </IconButton>
            <Menu 
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className='flex flex-row space-x-5' onClick={handleClose2}>
                    <img src={avatar} alt="avatar"/>
                    <Box className='flex flex-col'>
                        <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Thái Công</Typography>
                        <Typography className="text-black" style={{fontWeight:400, fontSize: 14}}>Xem trang cá nhân của bạn</Typography>
                    </Box>
                </MenuItem>
                <MenuItem className='flex flex-row space-x-5' onClick={handleClose2}>
                    <img src={bookMarkCircle} alt="bookMarkCircle"/>
                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Xem các bài viết đã lưu</Typography>
                </MenuItem>
                <MenuItem className='flex flex-row space-x-5' onClick={handleClose2}>
                    <img src={accountSettingCircle} alt="accountSettingCircle" />
                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Cài đặt tài khoản</Typography>
                </MenuItem>
                <MenuItem className='flex flex-row space-x-5' onClick={handleClose2}>
                    <img src={LogoutCircle} alt="LogoutCircle" />
                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Đăng xuất</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}