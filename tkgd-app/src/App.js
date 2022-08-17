import Header from './component/Header'
import HomePage from './component/pages/HomePage';
import Footer from './component/Footer';
import ReviewPage from './component/pages/ReviewPage';
import BlogList from './component/pages/BlogList';
import FeedBack from './component/pages/FeedBack';
import ViewBlog from './component/pages/ViewBlog';
import PersonalBlog from './component/pages/PersonalBlog';
import SavedBlogList from './component/pages/SavedBlogList';
import Posting from './component/pages/Posting'
import Preview from './component/pages/Preview'

import avatar from './assets/avatar/bigavt.svg';
import avatar2 from './assets/avatar/bigavt2.svg';
import miniavt1 from './assets/avatar/PersonalBlog1.svg';
import miniavt2 from './assets/avatar/PersonalBlog2.svg';

import { createTheme, ThemeProvider } from '@mui/material';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

import './App.css';


const theme = createTheme({
  palette:{
    primary:{
      main: '#F89800',
      secondary:'#22343D',
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
    },
    text:{
      primary:'#22343D',
      secondary: 'rgb(34, 52, 61)',
    },
  },
  typography:{
    fontFamily: 'Manrope',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    category:{ color:'#22343D'},

  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App flex flex-col">
          <Header />
          <div className='contents'>
            <Switch>
              <ScrollToTop>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/homePage">
                  <HomePage />
                </Route>
                <Route exact path="/review">
                  <ReviewPage />
                </Route>
                <Route exact path="/blogList">
                  <BlogList title='DANH SÁCH BÀI VIẾT' />
                </Route>
                <Route exact path="/LMHT">
                  <BlogList title='LIÊN MINH HUYỀN THOẠI' />
                </Route>
                <Route exact path="/lienquan">
                  <BlogList title='LIÊN QUÂN' />
                </Route>
                <Route exact path="/fifa">
                  <BlogList title='FIFA ONLINE 4' />
                </Route>
                <Route exact path="/freefire">
                  <BlogList title='FREE FIRE' />
                </Route>
                <Route exact path="/hotnews">
                  <BlogList title='TIN TỨC & SỰ KIỆN' />
                </Route>
                <Route exact path="/feedBack">
                  <FeedBack />
                </Route>
                <Route exact path="/viewBlog">
                  <ViewBlog />
                </Route>
                <Route exact path="/search">
                  <BlogList title='KẾT QUẢ TÌM KIẾM' />
                </Route>
                <Route exact path="/personalBlog">
                  <PersonalBlog name='Minh Đăng' avt={avatar} miniavt={miniavt1}/>
                </Route>
                <Route exact path="/personalBlog2">
                  <PersonalBlog name='Phúc Lê' avt={avatar2} miniavt={miniavt2}/>
                </Route>
                <Route exact path="/savedBlogList">
                  <SavedBlogList/>
                </Route>
                <Route exact path="/posting">
                  <Posting />
                </Route>
                <Route exact path="/preview">
                  <Preview />
                </Route>
              </ScrollToTop>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
