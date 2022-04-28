import styled from "styled-components";
import bg from '../../../assets/headerBg.jpg'

export const HeaderSwiperS = styled.div`
    background: linear-gradient(86.16deg, rgba(255, 255, 255, 0.2) 11.14%, rgba(255, 255, 255, 0.035) 113.29%);
    box-shadow: 0px 1.1966px 29.915px rgba(69, 42, 124, 0.1);
    backdrop-filter: blur(70px);
`

export const HeaderSwiperWrap = styled.div`
    background: url(${bg}) 0 0 / cover;
`

export const HeaderSwiperPath = styled.span`
margin-top: 5px;
    a{
        text-decoration: none;
        font-family: Exo 2;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }
`

export const HeaderSwiperIcon1 = styled.img`
margin: 0 20px -8px;
width: 5px;`

export const HeaderSwiperTitle = styled.h3`
    margin: 40px 0 0 0;
    padding: 0 0 80px 0;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`


export const HeaderSwiperItem = styled.div`
    padding: 20px 30px;
    cursor: pointer;
` 

export const HeaderSwiperIcon = styled.img`
    width: 15px;
    margin-right: 10px;
`

export const HeaderSwiperText = styled.p`
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #ffffff;
`