import Carousel from 'react-material-ui-carousel';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Typography } from "@mui/material";
import Slide1 from './TopWritterSlide/Slide1';

function Item(props)
{
    return (
        <>{props.item.slide}</>
    );
}

export default function TopWritter(){
    var items = [
        {
            slide: <Slide1/>,
        },
        {
            slide: <Slide1/>,
        },
        {
            slide: <Slide1/>,
        },
    ]
    return(
        <div className='flex flex-col space-y-10 px-20 py-10' style={{backgroundColor:'#EDEDED'}}>
            <Typography className="text-left font-bold" style={{fontSize: 25, fontWeight: 700}} variant='category' >TOP NHỮNG NGƯỜI CÓ BÀI VIẾT ĐƯỢC NHIỀU LƯỢT YÊU THÍCH NHẤT</Typography>
            <Carousel
                className='px-10'
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
        </div>
    );
}