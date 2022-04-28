import React from 'react'
import {  HeaderSwiperIcon, HeaderSwiperIcon1, HeaderSwiperItem, HeaderSwiperPath, HeaderSwiperS, HeaderSwiperText, HeaderSwiperTitle, HeaderSwiperWrap } from './HeaderSwiperSC'

import incr from '../../../assets/vectorUpGreen.svg'
import decr from '../../../assets/vectorDownRed.svg'
import next  from '../../../assets/next.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Flex } from '../../../uikit/uikit';
import { BannerInfoDecrease, BannerInfoIncrease } from '../bannerInfo/bannerInfoSC';
import { Link, useLocation } from 'react-router-dom'
import { Autoplay} from "swiper";
import axios from 'axios'


type Props = {
    swiperValues: any
} 


const HeaderSwiperBase:React.FC<Props> = (props) => {
    const [locationText, setLocationText] = React.useState('undefined')
    const [pathLocation, setPathLocation] = React.useState<string[]>(['Home'])
    const [showSwiper, setShowSwiper] = React.useState(false)
    const [prices, setPrices] = React.useState<string[]>([])




  const location = useLocation() 

  function pathControlls(){
    let path:string[] = []
      let pathName: string = ''
      let locPath = location.pathname 
      for(let i = 0; i < locPath.length; i++){
        pathName += locPath[i]
        if(i !== 0 && locPath[i] === '/' || i === locPath.length-1){
            path.push(pathName)
            pathName = ''
        }
      }
      let newPathLoc = []
      newPathLoc.push('Главная страница')
      path.forEach((el, index) => {
        if(el[0] === '/'){
          el = el.slice(1)
        }
        if(el[el.length-1] === '/'){
          el = el.slice(0, el.length-1)
        }
        if(el.toLowerCase() === 'aboutus'){
            el = 'О нас'
        }
        if(el.toLowerCase() === 'news&analytics'){
            el = 'Новости и аналитика'
        }
        if(el.toLowerCase() === 'listing'){
            el = 'Список компаний'
        }
        if(el.toLowerCase() === 'dividendcalendar'){
            el = 'Дивидендный календарь'
        }
        if(el.toLowerCase() === 'earningcalendar'){
            el = 'Календарь заработка'
        }
        if(el.toLowerCase() === 'report'){
            el = 'Отчёт'
        }
        if(el.toLowerCase() === 'newspage'){
            el = 'Новостная страница'
        }
        if(el.toLowerCase() === 'disclosures'){
            el = 'Раскрытие информации'
        }

        newPathLoc.push(el)
      })
      setPathLocation(newPathLoc)
  }

  

  React.useEffect(() => {

    pathControlls()

    if(location.pathname === '/listing'){
        setLocationText('Список компаний')
    }else if(location.pathname === '/listing/company'){
        setLocationText('Раскрытие информации компаниями')
    }else if(location.pathname === '/earningcalendar'){
        setLocationText('Календарь заработка')
    }else if(location.pathname === '/dividendcalendar'){
        setLocationText('Диведедный календарь ')
    }else if(location.pathname === '/aboutus'){
        setLocationText('О нас')
    }else if(location.pathname === '/news&analytics'){
        setLocationText('Новости')
    }else if(location.pathname === '/admin'){
        setLocationText('Админ-Панель')
    }else if(location.pathname === '/newspage'){
        setLocationText('Что такое инвестирование?')
    }else if(location.pathname === '/disclosures'){
        setLocationText('Раскрытие Информации')
    }else if(location.pathname === '/market'){
        setLocationText('Рынок')
    }else if(location.pathname === '/report'){
        setLocationText('Отчёт')
    // }else if(location.pathname === '/clearing'){
    //     setLocationText('Клириг и Депозитарий ')
    }else{
        setLocationText('Страница не найдена')
    }
    
  }, [location])

  function clickLink(el: string):string{
    if(el.toLowerCase() === 'главная страница'){
        return 'home'
    }
    if(el.toLowerCase() === 'О нас'){
        return 'aboutus'
    }
    if(el.toLowerCase() === 'Новости и аналитика'){
        return 'news&analytics'
    }
    if(el.toLowerCase() === 'Список компаний'){
        return 'listing'
    }
    if(el.toLowerCase() === 'Дивидендный календарь'){
        return 'dividendcalendar'
    }
    if(el.toLowerCase() === 'Календарь заработка'){
        return 'earningcalendar'
    }
    if(el.toLowerCase() === 'Отчёт'){
        return 'report'
    }
    if(el.toLowerCase() === 'Новостная страница'){
        return 'newspage'
    }
    if(el.toLowerCase() === 'Раскрытие информации'){
        return 'disclosures'
    }
    return 'Страница не найдена'
  }

  return (
    <HeaderSwiperWrap>
        <HeaderSwiperS>
            <Swiper
                loop
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true
                }}
                speed={5000}
                modules={[Autoplay ]}
                breakpoints= {{
                    320: {
                        slidesPerView: 1,
                    },
                    497: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1300: {
                        slidesPerView: 5,
                    }
                }
                  }>
    
                {props.swiperValues.map((val, index) => {
                    if(props.swiperValues.length > 0){
                        let posB = true
                        if(val.pos[0] === '-') posB = false
                        return <SwiperSlide  key={index}>
                            <HeaderSwiperItem>
                                <Flex align='center'>
                                    <HeaderSwiperIcon src={posB?incr:decr}/>
                                    <Flex direction='column'>
                                        <HeaderSwiperText>{val.name}</HeaderSwiperText>
                                        <Flex margin='10px 0 0 0'>
                                            <HeaderSwiperText>{val.value}</HeaderSwiperText>
                                            {!posB?<BannerInfoDecrease margin={true}>{val.pos}</BannerInfoDecrease>:<BannerInfoIncrease margin={true}>+{val.pos}</BannerInfoIncrease>}
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </HeaderSwiperItem>
                        </SwiperSlide>
                    }
                })}
                {props.swiperValues.map((val, index) => {
                    if(props.swiperValues.length > 0){
                        let posB = true
                        if(val.pos[0] === '-') posB = false
                        return <SwiperSlide  key={index}>
                            <HeaderSwiperItem>
                                <Flex align='center'>
                                    <HeaderSwiperIcon src={posB?incr:decr}/>
                                    <Flex direction='column'>
                                        <HeaderSwiperText>{val.name}</HeaderSwiperText>
                                        <Flex margin='10px 0 0 0'>
                                            <HeaderSwiperText>{val.value}</HeaderSwiperText>
                                            {!posB?<BannerInfoDecrease margin={true}>{val.pos}</BannerInfoDecrease>:<BannerInfoIncrease margin={true}>+{val.pos}</BannerInfoIncrease>}
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </HeaderSwiperItem>
                        </SwiperSlide>
                    }
                })}
            </Swiper>
        </HeaderSwiperS>

        <Container>
            <Flex align='center' margin='40px 0 0 0' flexWrap='wrap'>
                {pathLocation.map((el, index) => {
                    if(index === pathLocation.length -1){
                        return <HeaderSwiperPath key={index}>
                        <Link to='#' style={{textTransform: 'none'}}>{el}</Link>
                    </HeaderSwiperPath>
                    }else{
                        return <Flex  key={index}>
                                    <HeaderSwiperPath>
                                        <Link to={clickLink(el)}>{el}</Link>
                                    </HeaderSwiperPath>
                                    <HeaderSwiperIcon1 src={next} alt="" />
                         </Flex>
                    }
                })}
            </Flex>

            <HeaderSwiperTitle>{locationText}</HeaderSwiperTitle>

        </Container>
    </HeaderSwiperWrap>
  )
}

export default HeaderSwiperBase