import Header from './component/Header'
import HomePage from './component/pages/HomePage';
import Footer from './component/Footer';
import ReviewPage from './component/pages/ReviewPage';
import BlogList from './component/pages/BlogList';
import FeedBack from './component/pages/FeedBack';

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
                  <BlogList />
                </Route>
                <Route exact path="/feedBack">
                  <FeedBack />
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
