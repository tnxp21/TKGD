import Carousel from 'react-material-ui-carousel';
import {Box, Typography, IconButton } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import {Button} from '../../../component/customComponent/Button'
import rightArrow from '../../../assets/Icons/rightArrow.svg';
import { Link } from 'react-router-dom';

import Slide1 from './LMHTSlide/Slide1';
import Slide2 from './LMHTSlide/Slide2';
import Slide3 from './LMHTSlide/Slide3';


export default function LMHT(props){
    return(
        <Box className='flex flex-col px-20 space-y-10'>
            <Typography className="text-left font-bold" style={{fontSize: 30, fontWeight: 700}} variant='category' >{props.title}</Typography>
            <Carousel
                animation={'slide'}
                autoPlay={false}
                IndicatorIcon={<PanoramaFishEyeIcon/>}
                activeIndicatorIconButtonProps={{
                    style:{backgroundColor:'#6D6D6D', width:'20px', height:'20px'}
                }}
                indicatorIconButtonProps={{
                    style:{marginLeft:'20px'}
                }}
                
                >
                    <Slide1/>
                    <Slide2/>
                    <Slide3/>
            </Carousel>
            <Box  className='flex justify-end'>
                <Link to="/LMHT">
                    <Button style={{height:'64px', width:'15vw'}} variant='contained'>
                        <Typography style={{fontSize: 18, textTransform: 'none'}}>Các bài blog khác</Typography>
                        <IconButton>
                                <img src={rightArrow} alt='rightArrow' />
                        </IconButton>
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}