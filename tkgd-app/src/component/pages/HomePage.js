import HotNews from './HomePageComponent/HotNews';
import LMHT from './HomePageComponent/LMHT.js'
import TipsTricks from './HomePageComponent/TipsTricks'
import Tech from './HomePageComponent/Tech'
import TopWritter from './HomePageComponent/TopWritter';


export default function HomePage() {
    return(
        <div className='flex flex-col justify-between space-y-14'>
            <HotNews />
            <LMHT />
            <TopWritter />
            <TipsTricks />
            <Tech />
        </div>
        
    );
}