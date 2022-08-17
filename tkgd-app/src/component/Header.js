import * as React from 'react';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/Icons/logo.svg'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import notificationIcon from '../assets/Icons/notification.svg'
import LOLIcon from '../assets/Icons/LOLIcon.svg'
import LQIcon from '../assets/Icons/LQIcon.svg'
import LoginIcon from '../assets/Icons/login.svg'
import FifaIcon from '../assets/Icons/FifaIcon.svg'
import FFIcon from '../assets/Icons/FFIcon.svg';
import GoogleIcon from '../assets/Icons/GoogleIcon.svg'
import downArrow from '../assets/Icons/downArrow.svg'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Checkbox from '@mui/material/Checkbox';


import LogedIn from './pages/HeaderComponent/LogedIn'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Header(){
    const [login, setLogin] = useState(0);
    const handleClick2 = (event) => {
        setLogin(1);
        handleCloseD();
    };
    const [openD, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleCloseD = () => {
      setOpen(false);
    };
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return(
        <Box className='flex flex-row justify-between items-center px-10 space-x-10' style={{height: 60}} bgcolor="primary.main">
            <Link to="/homePage">
                <div className='flex flex-row space-x-3 mr-8'>
                    <img src={logo} alt="Logo" />
                    <Typography className='font-semibold' style={{fontSize: 22, fontWeight:600}}>G-hub</Typography>
                </div>
            </Link>
            <div class="flex flex-grow justify-between items-center h-full">
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full h-full md:block" id="mobile-menu">
                    <ul class="flex flex-col h-full mt-4 md:flex-row md:justify-between md:items-center md:mt-0 md:text-sm">
                        <li>
                            <Link to="/homePage">
                                <Typography style={{fontSize: 18, fontWeight:600}} >Trang chủ</Typography>
                            </Link>
                        </li>
                        <li className='flex items-center h-full'>
                            <Button
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<img src={downArrow} alt="downArrow"/>}
                                style={{color:'gray', height:'100%'}}
                            >
                                <Typography className="text-black font-semibold" style={{fontSize: 18, fontWeight:600, textTransform: 'none'}}>Phân loại</Typography>
                            </Button>
                            <Menu 
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to="/LMHT">
                                    <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                            <img src={LOLIcon} alt="LOLIcon"/>
                                            <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Liên minh huyền thoại</Typography>
                                    </MenuItem>
                                </Link>   
                                <Link to="/lienQuan">

                                <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                    <img src={LQIcon} alt="LQIcon"/>
                                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Liên Quân</Typography>
                                </MenuItem>
                                </Link>   

                                <Link to="/fifa">
                                <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                    <img src={FifaIcon} alt="FifaIcon" />
                                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Fifa Online 4</Typography>
                                </MenuItem>
                                </Link>   

                                <Link to="/freefire">
                                <MenuItem className='flex flex-row space-x-5' onClick={handleClose}>
                                    <img src={FFIcon} alt="FFIcon" />
                                    <Typography className="text-black" style={{fontWeight:600, fontSize: 20}}>Free Fire</Typography>
                                </MenuItem>
                                </Link>   

                            </Menu>
                        </li>
                        <li>
                            <Link to="/review">
                                <Typography className="text-black" style={{fontSize: 18, fontWeight:600}}>Review</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to="/hotnews">
                                <Typography className="text-black" style={{fontSize: 18, fontWeight:600}}>Tin hot & Sự kiện</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to="/feedBack">
                                <Typography className="text-black" style={{fontSize: 18, fontWeight:600}}>Feedback</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to="/posting">
                                <Typography className="text-blackx" style={{fontSize: 18, fontWeight:600}}>Đăng bài</Typography>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <form action="/search" class="flex items-center">   
                <label class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3">
                        <button type="submit" className=" rounded-full text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black" placeholder="Search" required />
                </div>
            </form>
            <IconButton>
                <img src={notificationIcon} alt="notificationIcon" style={{width:35, height:35}} />
            </IconButton>

            {/* login */}
            {login===0 && 
                <div>
                    <IconButton onClick={handleClickOpen}>
                        <img src={LoginIcon} alt="login" style={{width:35, height:35}}/>    
                    </IconButton>
                    <Dialog open={openD} onClose={handleCloseD}>
                        <DialogTitle className='flex flex-col'>
                            <Typography className="text-black text-center" style={{fontSize: 32, fontWeight: 600}}>
                                Sign in
                            </Typography>
                            <Typography className="text-black text-center" style={{fontSize: 14, fontWeight: 400}}>
                                Welcome back plese enter your details
                            </Typography>
                        </DialogTitle>
                        <DialogContent className='flex flex-col justify-center space-y-5'>
                            <TextField
                                autoFocus
                                size="small"
                                margin="dense"
                                fullWidth
                                placeholder="Please enter your email"
                                label="Email"
                                variant="outlined"
                                type="email"
                            />
                            <div>
                                <TextField
                                    autoFocus
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    placeholder="Please enter your password"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                />
                                <div className='flex flex-row justify-between space-x-5 items-center'>
                                    <div className='flex flex-row items-center'>
                                        <Checkbox defaultChecked size="small"/>
                                        <Typography style={{fontSize:'14px'}}>Remember for 30 days</Typography>
                                    </div>
                                    <a href='/#'><Typography  color='primary' style={{fontWeight:'600', fontSize:'14px'}}>Forgot Password</Typography></a>
                                </div>
                            </div>
                            <Box className='rounded-md' bgcolor='primary.main'>
                                <Button 
                                    className='rounded-md mt-0 w-full flex items-center' 
                                    onClick={handleClick2} 
                                >
                                    <Typography className='text-white' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Sign in</Typography>
                                </Button>
                            </Box>
                            <Box className='rounded-md border-2 border-gray-500' >
                                <Button 
                                    className='flex flex-row space-x-3 rounded-md mt-0 w-full items-center' 
                                    onClick={handleClick2} 
                                >
                                    <img src={GoogleIcon} alt="GoogleIcon"/>
                                    <Typography className='text-black' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Sign in with Google</Typography>
                                </Button>
                            </Box>
                            <Box className='flex flex-row justify-between'>
                                <Typography className='text-gray-600' style={{fontSize:15, fontWeight:600}}>
                                    Don't have an account?
                                </Typography>
                                <a href='/#'>
                                    <Typography style={{fontSize:15, fontWeight:600}} color='primary'>Sign up</Typography>
                                </a>
                            </Box>
                        </DialogContent>
                    </Dialog>
                </div>
            }
            {login===1 && <LogedIn/>}
            
        </ Box>
    );
}
export default Header;