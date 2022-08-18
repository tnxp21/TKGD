import { Link } from 'react-router-dom';
import { Box, Typography, Paper, Button} from '@mui/material';
import avt from '../../assets/avatar/BlogList1.svg';
import blogListThumbnail from '../../assets/Pictures/BlogList/blogListThumbnail.svg'
import img2 from '../../assets/Pictures/ViewBlog/Image2.svg';
import img3 from '../../assets/Pictures/ViewBlog/Image3.svg';
import BG from '../../assets/Pictures/BlogList/backGround.svg';
import BackIcon from '../../assets/Icons/Posting/Back.svg';
import Export from '../../assets/Icons/Posting/Export.svg';
import success from '../../assets/Icons/successPost.svg';

import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



export default function ViewBlog()
{
    const [openD, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleCloseD = () => {
    setOpen(false);

    };

    return (
        <Box className='flex flex-col pt-14'>
            {/* button */}
            <Box className='flex flex-row space-x-5 mb-14 justify-end pr-36'>
                <Link to="/posting">
                    <Box className='flex rounded-lg border-2 border-gray-500 items-center justify-center' style={{width:'9vw', height:'50px'}}>
                        <Button 
                            className='flex flex-row space-x-3 w-full h-full' 
                            style={{color:'gray'}}
                        >
                            <img src={BackIcon} alt="Preview"/>
                            <Typography className='text-black' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Chỉnh sửa</Typography>
                        </Button>
                    </Box>
                </Link>
                {/* Dialog */}
                <div>
                    <Box className='flex rounded-lg items-center justify-center' bgcolor='primary.main' style={{width:'9vw', height:'50px'}}>
                        <Button 
                            className='flex flex-row space-x-3 w-full h-full'
                            style={{color:'white'}}
                            onClick={handleClickOpen}
                        >
                            <img src={Export} alt="Export"/>
                            <Typography className='text-white' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xuất bản</Typography>
                        </Button>
                    </Box>
                    <Dialog open={openD}>
                        <Box className='p-5'>
                            <DialogTitle className='flex flex-col'>
                                <Box className='flex items-center justify-center'><img src={success} alt="success"/></Box>

                                <Typography className="text-black text-center" style={{fontSize: 24, fontWeight: 600}}>
                                    Chờ phê duyệt
                                </Typography>
                                <Typography className="text-gray-400 text-center" style={{fontSize: 14, fontWeight: 400}}>
                                    Bài viết đã được gửi cho admin để duyệt!                            
                                </Typography>
                            </DialogTitle>
                            <DialogContent className='flex flex-col justify-center space-y-5'>
                                    <Box className='rounded-full' bgcolor='primary.main'>
                                        <Link to="/">
                                            <Button 
                                                className='rounded-full mt-0 w-full flex items-center' 
                                                onClick={handleCloseD} 
                                            >
                                                <Typography className='text-white' style={{fontSize:15, fontWeight:600, textTransform: 'none'}}>Xong</Typography>
                                            </Button>
                                        </Link>
                                    </Box>
                            </DialogContent>
                        </Box>
                    </Dialog>
                </div>
            </Box>
            {/* content */}
            <Box 
                className='px-36 pb-20'
                style={{backgroundImage:`url(${BG})`, backgroundSize: 'cover'}}
            >
                <Paper 
                    className='flex flex-col space-y-10 px-14 py-5' 
                    elevation={5}
                    sx={{borderRadius: '30px'}}
                >
                    <Typography className='text-    left' style={{fontWeight:600, fontSize:30}}>Góc tối của nghề Streamer</Typography>

                    <Box className='flex flex-row space-x-3'>
                        <img src={avt} alt='avt' />
                        <Box className='flex flex-col text-left'>
                            <Typography style={{fontWeight:600, fontSize: 24}} color='primary'>Minh Đăng</Typography>
                            <Typography style={{textColor:'primary'}} >05.06.2022  - 4 phút đọc</Typography>
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
                </Paper>
            </Box>
        </Box>
    )
}