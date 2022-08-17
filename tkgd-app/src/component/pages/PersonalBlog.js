import { Box, Typography, IconButton, Paper  } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Slide1 from './PersonalBlogComponent/Slide1';
import Slide2 from './PersonalBlogComponent/Slide2';
import BG from '../../assets/Pictures/BlogList/backGround.svg';
import bookMark from '../../assets/Icons/bookMark.svg'


import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export default function PersonalBlog(props){
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return(
        <Box className='grid grid-cols-3 px-10 pt-14'>
            <Paper 
                className='flex flex-col space-y-5 px-14 py-8 mt-20 h-min' 
                elevation={5}
                sx={{borderRadius: '30px'}}

            >
                <img src={props.avt} alt='avt' />
                <Box className='flex flex-row space-x-3 justify-center items-center'>
                    <Typography className='text-center' style={{fontWeight:600, fontSize: 24}} color='primary'>{props.name}</Typography>
                    <IconButton><EditIcon /></IconButton>
                </Box>
                <Box className='grid grid-rows-5 gap-y-5'>
                    <Box className='flex flex-row justify-between'>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>Ngày sinh</Typography>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>22/09/2001</Typography>
                    </Box>
                    <Box className='flex flex-row justify-between'>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>Giới tính</Typography>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>Nam</Typography>
                    </Box>
                    <Box className='flex flex-row justify-between'>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>Thời gian tham gia</Typography>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>07/06/2022</Typography>
                    </Box>
                    <Box className='flex flex-row justify-between'>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>Số bài blog</Typography>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>14</Typography>
                    </Box>
                    <Box className='flex flex-row justify-between'>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>Số người yêu thích</Typography>
                        <Typography style={{fontWeight:400, fontSize: 20}} color='black'>5.5K</Typography>
                    </Box>
                </Box>
            </Paper>
            <Box className='flex flex-col space-y-10 col-span-2' >
                <Typography className="pl-20 text-left font-bold" style={{fontSize: 30, fontWeight: 700}} variant='category' >BÀI VIẾT CÁ NHÂN</Typography>
                <Box 
                    className='flex flex-col pb-10 px-10 space-y-10 justify-center items-center pl-28'
                    style={{backgroundImage:`url(${BG})`, backgroundSize: 'cover'}}
                >
                    {page===1 && <Slide1 name={props.name} miniavt={props.miniavt} saved={bookMark}/>}
                    {page===2 && <Slide2 name={props.name} miniavt={props.miniavt} saved={bookMark}/>}
                    <Pagination
                        count={10}
                        color="primary"
                        onChange={handleChange}

                        renderItem={(items) => (
                        <PaginationItem
                            sx={{height:'55px', width:'55px', borderRadius:'50px', fontWeight:'400', fontSize:'28px', marginRight:'25px'}}
                            {...items}
                        />
                        )}
                    />
                </Box>
            </Box>
        </Box>
    );
}