import HotNews from './HomePageComponent/HotNews';
import LMHT from './HomePageComponent/LMHT.js'
import TopWritter from './HomePageComponent/TopWritter';


export default function HomePage() {
    return(
        <div className='flex flex-col justify-between space-y-10 mb-8'>
            <HotNews />
            <LMHT title='LIÊN MINH HUYỀN THOẠI'/>
            <TopWritter />
            <LMHT title='TIPS & TRICKS'/>
            <LMHT title='CÔNG NGHỆ'/>
        </div>
        
    );
}