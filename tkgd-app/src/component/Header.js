import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/Icons/logo.svg'
import IconButton from '@mui/material/IconButton';
import notificationIcon from '../assets/Icons/notification.svg'
import avatar from '../assets/Icons/avatar.svg';
import LOLIcon from '../assets/Icons/LOLIcon.svg'
import LQIcon from '../assets/Icons/LQIcon.svg'
import FifaIcon from '../assets/Icons/FifaIcon.svg'
import FFIcon from '../assets/Icons/FFIcon.svg';
import downArrow from '../assets/Icons/downArrow.svg'
import LogoutCircle from '../assets/Icons/LogoutCircle.svg'
import bookMarkCircle from '../assets/Icons/bookMarkCircle.svg'
import accountSettingCircle from '../assets/Icons/accountSettingCircle.svg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Header(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return(
        <Box className='flex flex-row justify-between items-center px-10 space-x-10' style={{height: 60}} bgcolor="primary.main">
            <div className='flex flex-row space-x-3 mr-8'>
                <img src={logo} alt="Logo" />
                <Typography className='font-semibold' style={{fontSize: 22, fontWeight:600}}>G-hub</Typography>
            </div>
            <div class="flex flex-grow justify-between items-center">
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block" id="mobile-menu">
                    <ul class="flex flex-col mt-4 md:flex-row md:justify-between md:items-center md:mt-0 md:text-sm">
                        <li>
                            <Link to="/">
                                <Typography className="font-semibold" style={{fontSize: 18}} >Trang chủ</Typography>
                            </Link>
                        </li>
                        <li className='flex items-center'>
                            <Typography className="text-black font-semibold" style={{fontSize: 18, textTransform: 'none'}}>Phân loại</Typography>
                            <IconButton
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img src={downArrow} alt="downArrow"/>
                            </IconButton>
                            <Menu 
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to="/blogList">
                                    <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                            <img src={LOLIcon} alt="LOLIcon"/>
                                            <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Liên minh huyền thoại</Typography>
                                    </MenuItem>
                                </Link>   

                                <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                    <img src={LQIcon} alt="LQIcon"/>
                                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Liên Quân</Typography>
                                </MenuItem>
                                <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                    <img src={FifaIcon} alt="FifaIcon" />
                                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Fifa Online 4</Typography>
                                </MenuItem>
                                <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                    <img src={FFIcon} alt="FFIcon" />
                                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Free Fire</Typography>
                                </MenuItem>
                            </Menu>
                        </li>
                        <li>
                            <Link to="/review">
                                <Typography className="text-black font-semibold" style={{fontSize: 18}}>Review</Typography>
                            </Link>
                        </li>
                        <li>
                            <Typography className="text-black font-semibold" style={{fontSize: 18}}>Tin hot & Sự kiện</Typography>
                        </li>
                        <li>
                            <Typography className="text-black font-semibold" style={{fontSize: 18}}>Feedback</Typography>
                        </li>
                        <li>
                            <Typography className="text-black font-semibold" style={{fontSize: 18}}>Đăng bài</Typography>
                        </li>
                    </ul>
                </div>
            </div>
            <form class="flex items-center">   
                <label class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3">
                        <button type="submit" className=" rounded-full text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black" placeholder="Search" required />
                </div>
            </form>
            <img src={notificationIcon} alt="notificationIcon" style={{width:35, height:35}} />
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
                    <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                        <img src={LogoutCircle} alt="LogoutCircle" />
                        <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Đăng xuất</Typography>
                    </MenuItem>
                </Menu>
            </Box>

        </ Box>
    );
}
export default Header;