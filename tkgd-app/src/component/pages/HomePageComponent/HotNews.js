import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';
import rightArrow from '../../../assets/Icons/rightArrow.svg';
import SlideShow1 from '../../../assets/Pictures/SlideShow1.svg';
import SlideShow2 from '../../../assets/Pictures/SlideShow2.svg';
import SlideShow3 from '../../../assets/Pictures/SlideShow3.svg';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

function HotNews(props)
{
    var items = [
        {
            name: "Xu hướng ngành công nghiệp trò chơi năm 2022",
            description: "Những thay đổi về công nghệ và tính năng chơi game sẽ quyết định tương lai của ngành công nghiệp này. Các khía cạnh xã hội như giao tiếp và chơi hợp tác.",
            image: SlideShow1,
        },
        {
            name: "Top những máy playstation mới nhất năm 2022",
            description: "Máy chơi game PlayStation (PS) là loại máy chơi game console của thương hiệu công nghệ nổi tiếng Sony. Mới đầu ra mắt, Sony hướng tới đây là một chiếc máy phục ...",
            image: SlideShow2,
        },
        {
            name:"Dàn PC chất lượng nhất dành cho game thủ năm 2022",
            description:"Hiện nay, các dàn PC chơi game chất lượng thường có giá thành không hề rẻ, chính vì vậy, trước khi mua, bạn cần phải tham khảo kỹ lưỡng và tuân theo 5 bước ...",
            image: SlideShow3,
        }
    ]

    return (
        <Carousel
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
    )
}

function Item(props)
{
    return (
        <Paper className="grid grid-cols-8 px-20 py-10" 
        style={{
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                backgroundImage: `url(${props.item.image})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                }}>
            <Box className='flex flex-col space-y-5 py-10 col-span-3'>
                <Typography className='text-left font-semibold text-white' style={{fontSize: 25, fontWeight: 600}}>{props.item.name}</Typography>
                <Typography className='text-left text-white' style={{fontSize: 18}}>{props.item.description}</Typography>
                <Box className='flex flex-grow items-end'>
                    <Button className='flex flex-row space-x-5' style={{width:'180px', height: '55px', backgroundColor: 'white'}} variant="contained">
                        <Typography style={{fontSize:'18'}}>Đọc thêm</Typography>
                        <img src={rightArrow} alt={rightArrow} />
                    </Button>
                </Box>
            </Box>
            <div className='col-span-1'></div>
            <Box className='col-span-4'>
                <img src={props.item.image} alt={props.item.image} />
            </Box>            
        </Paper>
    )
}

export default HotNews;