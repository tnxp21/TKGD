import {Box, Typography } from '@mui/material';
import { useState } from 'react';

import Slide1 from './BlogListComponent/Slide1';
import Slide2 from './BlogListComponent/Slide2';
import BG from '../../assets/Pictures/BlogList/backGround.svg';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export default function TipsTricks(){
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return(
        <Box className='flex flex-col space-y-10 pt-5 px-5' >
            <Typography className="pl-20 text-left font-bold" style={{fontSize: 30, fontWeight: 700}} variant='category' >LIÊN MINH HUYỀN THOẠI</Typography>
            <Box 
                className='flex flex-col pb-10 px-10 space-y-10 justify-center items-center'
                style={{backgroundImage:`url(${BG})`}}
            >
                {page===1 && <Slide1/>}
                {page===2 && <Slide2/>}
                {/* <Pagination 
                    count={9} 
                    color="primary"
                    page={page}
                    size="100px"
                    onChange={handleChange}
                /> */}
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
    );
}