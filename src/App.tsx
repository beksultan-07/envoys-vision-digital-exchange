import React, {Suspense} from 'react';
import { Route, Routes } from "react-router";

import DividendC from './pages/dividendCalendar/DividendC';
import EarningC from './pages/earningsCalendar/EarningC';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import { useLocation, useNavigate } from 'react-router-dom'
import HeaderSwiperBase from './components/homeComponents/headerSwiper/HeaderSwiperBase';
import Company from './pages/Company/Company';
import Clearing from "./pages/clearing/Clearing";
import Listing from "./pages/Listing/Listing";
import GoUpButton from "./components/goUpButton";
import News from './pages/News/News';
import axios from 'axios';
import AboutUs from './pages/AboutUs/AboutUs';
import TradingCalendar from './pages/TradingCalendar/TradingCalendar';
import Admin from './pages/Admin/Admin';
import DisclosureAll from './pages/DisclosureAll/DisclosureAll';
import Markets from './pages/Markets/Markets';
import NewsPage from './pages/NewsPage/NewsPage';
import Disclosures from './pages/Disclosures/Disclosures';
import Report from './pages/Report/Report';



function App() {
  const [showSwiper, setShowSwiper] = React.useState(true)
  const [values, setValues] = React.useState<any>([])
  const [urlReqs, setUrlReqs] = React.useState([['usd', 'kgs'], ['btc', 'usd']])
  const [tokens, settokens] = React.useState([
    'B60Y9G6MUFIB74BR',
    'JT5JJJ1PQ7KQ523Z',
    'FTMLRN8FWG1LJPDC',
    '0LS7I9BY8JMY59PW',
    'NHS1OAEGYI3YJ651',
    'O4UGRMISTOMXIPHM',
    'IIDPNNKOCC9IRHQK',
    'DJ7EVX44X6LVNIH7',
    '525LQXJBKEB9PLZP',
    'WY1XD34FPD9GXG2M',
    'ZZZVV9WHM934K6B2',
    '0C80KZ88HII9C1SS',
    'WX15E2PUDWQQ5CV9',
    'EVX9TADK1CIBKDV8'
  ])
  const location = useLocation() 

  function getRandomNum(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  function requestGetBtc(el:any){
    let randToken = tokens[getRandomNum(0, tokens.length)]
    axios(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${el[0]}&market=${el[1]}&apikey=${randToken}`)
        .then(res => res.data)
        .then(res => {
          try{
              let resKeys = Object.keys(res['Time Series (Digital Currency Daily)'])
              let priceToday = res['Time Series (Digital Currency Daily)'][resKeys[0]]['2b. high (USD)']
              let priceYesterday = res['Time Series (Digital Currency Daily)'][resKeys[1]]['2b. high (USD)']
              let newObj = {
                  name: el[0]=='btc'?el[0].toUpperCase()+' USD':el[0].toUpperCase(),
                  value: String(priceToday).slice(0, 7),
                  pos: String((parseFloat(priceToday)-parseFloat(priceYesterday))).slice(0, 7)
              }
              setValues(val => [...val, newObj])
            }catch (error){
              requestGetBtc(el)
            }
      })
  }

    function requestGetUsd(el:any){
      let randToken = tokens[getRandomNum(0, tokens.length)]
      axios(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${el[0]}&to_symbol=${el[1]}&apikey=${randToken}`)
          .then(res => res.data)
          .then(res => {
            try {
              let resKeys = Object.keys(res['Time Series FX (Daily)'])
              let priceToday = res['Time Series FX (Daily)'][resKeys[0]]['2. high']
              let priceYesterday = res['Time Series FX (Daily)'][resKeys[1]]['2. high']
              let newObj = {
                  name: el[0]!=='kgs'?el[0].toUpperCase()+' KGS':el[0].toUpperCase(),
                  value: String(priceToday.slice(0, 7)),
                  pos: String((parseFloat(priceToday)-parseFloat(priceYesterday))).slice(0, 7)
              }
              setValues(val => [...val, newObj])
            } catch (error){
              requestGetUsd(el)
            }
          })
    }

  React.useEffect(() => {    
    urlReqs.forEach((el, index) => {
      if(el[0] === 'btc'){
        requestGetBtc(el)
      }else{ 
        requestGetUsd(el)
      }   
  })
  }, [])
  
  
  let navigate = useNavigate()

  React.useEffect(() => {
    if(location.pathname === '/' || location.pathname.toLowerCase() === '/home'){
      setShowSwiper(false)
    }else{
      setShowSwiper(true)
    }   
    if(location.pathname === '/envoys-vision'){
      navigate('/')
    }   

  }, [location])
  


  return (
    <Suspense fallback={'Loader...'}>
      <Header/>
      {showSwiper?<HeaderSwiperBase swiperValues={values}/>:<></>}
      <Routes>
        <Route path="/" element={<Home swiperValues={values}/>}/>
        <Route path="/home" element={<Home swiperValues={values}/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/listing/company" element={<Company/>}/>
        {/* <Route path="/clearing" element={<Clearing/>}/> */}
        {/* <Route path="/disclosure" element={<DisclosureAll/>}/> */}
        <Route path="/newspage" element={<NewsPage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/news&analytics" element={<News/>}/>
        <Route path="/earningcalendar" element={<EarningC/>}/>
        <Route path="/dividendcalendar" element={<DividendC/>}/>
        <Route path="/tradingcalendar" element={<TradingCalendar/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/disclosures" element={<Disclosures/>}/>
        <Route path='/market' element={<Markets/>}/>
        <Route path='/report' element={<Report/>}/>
      </Routes>

      <Footer/>
    </Suspense>
  );
}

export default App;
