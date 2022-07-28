import Carousel from 'react-material-ui-carousel';
import {Box, Typography, IconButton } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import {Button} from '../../customComponent/Button'
import rightArrow from '../../../assets/Icons/rightArrow.svg';

import Slide1 from './LMHTSlide/Slide1';
import Slide2 from './LMHTSlide/Slide2';
import Slide3 from './LMHTSlide/Slide3';

function Item(props)
{
    return (
        <>{props.item.slide}</>
    );
}

export default function TipsTricks(){
    var items = [
        {
            slide: <Slide1/>,
        },
        {
            slide: <Slide2/>,
        },
        {
            slide: <Slide3/>,
        },
    ]
    return(
        <Box className='flex flex-col px-20 space-y-10'>
            <Typography className="text-left font-bold" style={{fontSize: 30, fontWeight: 700}} variant='category' >TIPS & TRICKS</Typography>
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
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
            </Carousel>
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