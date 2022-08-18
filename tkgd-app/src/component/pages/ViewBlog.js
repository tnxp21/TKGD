import { Box, Typography, IconButton, Paper, Button  } from '@mui/material';
import avt from '../../assets/avatar/BlogList1.svg';
import avt2 from '../../assets/avatar/LMHT3.svg';
import avt3 from '../../assets/avatar/LMHT4.svg';

import blogListThumbnail from '../../assets/Pictures/BlogList/blogListThumbnail.svg'
import heartReact from '../../assets/Icons/heartReact.svg';
import bookMark from '../../assets/Icons/bookMark.svg'
import emoji from '../../assets/Icons/emoji.svg'
import facebook from '../../assets/Icons/facebook.svg'
import instagram from '../../assets/Icons/instagram.svg'
import zalo from '../../assets/Icons/zalo.svg'
import threeDots from '../../assets/Icons/threeDots.svg'
import BG from '../../assets/Pictures/BlogList/backGround.svg';
import img2 from '../../assets/Pictures/ViewBlog/Image2.svg';
import img3 from '../../assets/Pictures/ViewBlog/Image3.svg';

import LMHT from './HomePageComponent/LMHT'

export default function ViewBlog()
{
    return (
        <div className='flex flex-col py-10'>
            <Box 
                className='px-36 pb-10'
                style={{backgroundImage:`url(${BG})`, backgroundSize: 'cover'}}
            >
                <Paper 
                    className='flex flex-col space-y-10 px-14 py-5' 
                    elevation={5}
                    sx={{borderRadius: '30px'}}
                >
                    <Typography className='text-left' style={{fontWeight:600, fontSize:30}}>Góc tối của nghề Streamer</Typography>
                    <Box className='flex flex-row justify-between'>
                        <Box className='flex flex-row space-x-3'>
                            <img src={avt} alt='avt' />
                            <Box className='flex flex-col text-left'>
                                <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Minh Đăng</Typography>
                                <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
                            </Box>
                        </Box>
                        <Box className='flex items-start flex-row space-x-5'>
                            <IconButton>
                                <img src={facebook} alt='facebook' />
                            </IconButton>
                            <IconButton>
                                <img src={zalo} alt='zalo' />
                            </IconButton>
                            <IconButton>
                                <img src={instagram} alt='instagram' />
                            </IconButton>
                            <IconButton>
                                <img src={threeDots} alt='threeDots' />
                            </IconButton>
                        </Box>
                    </Box>
                    {/* Content */}
                    <img src={blogListThumbnail} alt='blogListThumbnail' />
                    <Box className='text-left space-y-5'>
                        <Typography style={{fontWeight:400, fontSize:18}}>Giới trẻ hiện nay rất đam mê với nghề Streamer, một công việc đầy tìm năng trong vài năm trở lại.</Typography>
                        <Typography style={{fontWeight:400, fontSize:18}}>Streamer được hiểu là những người phát sóng trực tiếp (streaming) các hoạt động của mình cho khán giả xem, trên các nền tảng mạng xã hội như Facebook, Youtube hay Twitch... </Typography>
                        
                    </Box>
                    <Box className='grid grid-cols-2'>
                        <Box className='flex flex-col text-left space-y-5'>
                            <Typography style={{fontWeight:600, fontSize:18}}>
                                Thu nhập “khủng”
                            </Typography>
                            <Typography style={{fontWeight:400, fontSize:18}}>
                                Với sự phát triển mạnh mẽ và không ngừng của công nghệ, nhất là Internet, mạng xã hội, nghề streaming đem lại một nguồn khu nhập khá tốt. Ví dụ trên Twitch, nền tảng streaming số một thế giới hiện nay, cho phép các streamer truyền phát rất nhiều nội dung khác nhau từ game, trò chuyện, vlogs, nấu ăn… 
                            </Typography>
                            <Typography style={{fontWeight:400, fontSize:18}}>
                                Ở trên Twitch, mỗi lần đăng ký theo dõi (Sub) kênh của một streamer, người xem sẽ phải bỏ ra 5 USD/ tháng để nhận được những đặc quyền trên kênh chat và nhận được nhiều ưu đãi riêng trong các dịp sự kiện. Các streamer phải chia 70/30 với Twitch từ mỗi lượt sub, nên thu nhập thực sẽ là 3,5 USD/ người mỗi tháng. Và giả sử một streamer có 30.000 người theo dõi thì thu nhập của người đó mỗi tháng sẽ là 105.000 USD.
                            </Typography>
                            <Typography style={{fontWeight:400, fontSize:18}}>
                                Thu nhập của streamer Việt Nam cũng như thế giới đều chủ yếu đến từ những nguồn sau: sự đóng góp và ủng hộ (donate), lượt xem và đăng ký kênh, nhà tài trợ và quảng cáo. Với các nguồn thu này, lượt xem của streamer càng tăng họ càng có thêm nhiều thu nhập. Ngoài các hình thức kiếm tiền cũ, nhiều streamer hiện nay cũng tạo thu nhập bằng cách đặt link affiliate dưới phần mô tả hoặc trên video của mình. Khi những người xem video click vào link affiliate marketing và mua hàng, các streamer sẽ nhận được tiền hoa hồng từ đó. Thu nhập từ affiliate marketing của các streamer hoàn toàn có thể lên tới hàng chục triệu đồng mỗi tháng chỉ nhờ các đường link này.
                            </Typography>
                        </Box>
                        <img src={img2} alt='thu_nhap_khung' />

                    </Box>
                    <Box className='grid grid-cols-2'>
                        <img src={img3} alt='Khong_nhu_mo' />

                        <Box className='flex flex-col text-left space-y-5'>
                            <Typography style={{fontWeight:600, fontSize:18}}>
                                Không như là mơ
                            </Typography>
                            <Typography style={{fontWeight:400, fontSize:18}}>
                                Trên thực tế, để trở thành một streamer chân chính cũng cần phải có kiến thức, phải có độ hiểu biết sâu sắc về một lĩnh vực nào đó.
                            </Typography>
                            <Typography style={{fontWeight:400, fontSize:18}}>
                            Thu nhập của các streamer tuy nghe chừng là cao, nhưng chỉ ít người có thể đạt được con số đó. Thực chất, đây là một nghề rất khốc liệt, có tính cạnh tranh cao. Phần lớn những kênh Twitch của các streamer mới vào nghề chỉ được vài chục lượt người xem trực tiếp. Trong khi phải đầu tư khá lớn cho dàn máy tính, phụ kiện chơi game đắt đỏ. 
                            </Typography>
                        </Box>

                    </Box>
                    <Box className='flex flex-grow items-end flex-row justify-between '>
                        <Box className='flex flex-row space-x-5 items-center'>
                            <Button startIcon={<img src={heartReact} alt='heartReact' />}>
                                <Typography style={{fontWeight:400, fontSize:18}}>1.5K</Typography>
                            </Button>
                            <Typography style={{fontWeight:400, fontSize:18}}>8 phản hồi</Typography>
                        </Box>
                        <Box className='flex flex-row space-x-2 items-center'>
                            <IconButton>
                                <img src={bookMark} alt='bookMark' />
                            </IconButton>
                        </Box>
                    </Box>
                    {/* Comment */}
                    <Box className='border-t-2 border-gray-400 flex flex-col py-8 space-y-5'>
                        <Box className='flex flex-row space-x-8'>
                            <img src={avt} alt='avt' />
                            <Box className='rounded-3xl flex flex-row justify-between px-5 items-center w-full' style={{backgroundColor: '#F6F6F6'}}>
                                <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18}}>Viết bình luận...</Typography>
                                <IconButton>
                                    <img src={emoji} alt='emoji' />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box className='flex flex-row space-x-8 items-start'>
                            <img src={avt2} alt='avt' />
                            <Box className='rounded-3xl flex flex-col justify-between px-5 items-start w-full' style={{backgroundColor: '#F6F6F6'}}>
                                <Typography color='primary' style={{fontWeight:600, fontSize:18}}>Minh An</Typography>
                                <Typography className='text-black' style={{fontWeight:400, fontSize:18}}>Bài viết khá hay !!!</Typography>
                                <Box className='flex flex-row space-x-4'>
                                    <Button>
                                        <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18, textTransform: 'none'}}>Thích</Typography>
                                    </Button>
                                    <Button>
                                        <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18, textTransform: 'none'}}>Trả lời</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='flex flex-row space-x-8 items-start'>
                            <img src={avt3} alt='avt' />
                            <Box className='flex flex-col space-y-8'>
                                <Box className='rounded-3xl flex flex-col justify-between px-5 items-start w-full' style={{backgroundColor: '#F6F6F6'}}>
                                    <Typography color='primary' style={{fontWeight:600, fontSize:18}}>Thái Hoài</Typography>
                                    <Typography className='text-black' style={{fontWeight:400, fontSize:18}}>Bài viết rất hữu ít :))))</Typography>
                                    <Box className='flex flex-row space-x-4'>
                                        <Button>
                                            <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18, textTransform: 'none'}}>Thích</Typography>
                                        </Button>
                                        <Button>
                                            <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18, textTransform: 'none'}}>Trả lời</Typography>
                                        </Button>
                                    </Box>
                                </Box>
                                {/* Reply */}
                                <Box className='flex flex-row items-start space-x-8'>
                                    <img src={avt2} alt='avt' />
                                    <Box className='flex flex-col'>
                                        <Box className='rounded-3xl flex flex-col justify-between px-5 items-start w-full' style={{backgroundColor: '#F6F6F6'}}>
                                            <Typography color='primary' style={{fontWeight:600, fontSize:18}}>Minh An</Typography>
                                            <Typography className='text-black' style={{fontWeight:400, fontSize:18}}>Bài viết khá hay !!!</Typography>
                                            <Box className='flex flex-row space-x-4'>
                                                <Button>
                                                    <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18, textTransform: 'none'}}>Thích</Typography>
                                                </Button>
                                                <Button>
                                                    <Typography className='text-gray-500' style={{fontWeight:400, fontSize:18, textTransform: 'none'}}>Trả lời</Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            {/* Blog liên quan */}
            <LMHT title='CÁC BÀI BLOG LIÊN QUAN'/>
        </div>

    )
}