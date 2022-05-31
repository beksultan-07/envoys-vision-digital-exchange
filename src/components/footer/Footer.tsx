import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Container } from '../../uikit/uikit';

const FooterWrap = styled.footer`
  position: relative;
`

const FooterBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 920px){
    flex-wrap: wrap;
    justify-content: center;
  }
  @media(max-width: 740px){
    justify-content: start;
    margin-left: 23%;
  }

  @media(max-width: 470px){
    margin-left: 10%;
  }
  @media(max-width: 375px){
    margin-left: 0;
  }
`

const FooterItems = styled.div`
 /* width: 33.3%; */
  padding: 40px 86px 100px 31px;
  border-right: 1px solid #DADADA;
  &:last-child{
    border-right: none;
  }
  @media(max-width: 920px){
    &:nth-child(2){
      border-right: none;
    }
  }
  @media(max-width: 740px){
      border-right: none;
      padding: 40px 86px 40px 31px;

  }
`

const Contacts = styled.div`
 display: flex; 
 flex-direction: column;
`

const Contact = styled.a`
  font-family: Exo 2;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: #045599;
  width: 283px;
  text-decoration: none;
  margin: 0 0 20px 0;
  &:last-child{
    text-transform: lowercase;
  }

  @media(max-width: 1020px){
    font-size: 26px;

  }
`

const WorkDays = styled.span`
  font-family: Exo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #101010;
  margin-bottom: 50px;
`

const CompanyName = styled.span`
  margin: 20px 0 10px 0;
  a{
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #101010;
  }
`

const PrivacyPolicy = styled.span`
  a{
    font-family: Exo 2;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      text-decoration: none;
      color: #F47F1F;
      transition: .1s;
      :hover{
        font-size: 15px;
      }
  }
`

const FooterNavHeading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
    letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #101010;
  @media(max-width: 1020px){
    font-size: 18px;

  }
`

const NavItem = styled.li`
  margin: 30px 0 20px 0;
  list-style: none;
  a{
    text-decoration: none;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #101010;
    cursor: pointer;
    white-space: nowrap;
    transition: .1s;
    :hover{
      font-weight: 500;
      font-size: 18px;
      color: #045599;
    }
  }
`

const FooterContainer = styled(Container)`
  /* max-width: 1200px; */
  border-right: 1px solid #DADADA;
  border-left: 1px solid #DADADA;
  &:before{
    position: absolute;
    content: '';
    background: #F47F1F;
    width: 100vw;
    height: 6px;
    top: 0;
    left: 0;
  }
`


const Footer = () => {
  return (
      <FooterWrap>
        <FooterContainer>
        <FooterBlock>
          <FooterItems>
            <Contacts>
              <Contact href="tel:+996 (559) 18 00 33">+996 (312) 884 448</Contact>
              <WorkDays>Пн-Пт 9.00-18.00</WorkDays>
              <Contact href="info@evde.kg" style={{margin: '0'}}>office@envoys.vision</Contact>
              <CompanyName>Envoys Vision Digital Exchange 2022</CompanyName>
              <PrivacyPolicy><Link to='#'>Политика конфиденциальности</Link></PrivacyPolicy>
            </Contacts>
          </FooterItems>
          {/* <FooterItems>
            <FooterNavHeading>Навигация по сайту</FooterNavHeading>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
          </FooterItems>
          <FooterItems>
            <FooterNavHeading>Навигация по сайту</FooterNavHeading>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
            <NavItem><Link to='#'>Навигация по сайту</Link></NavItem>
          </FooterItems> */}
        </FooterBlock>
        </FooterContainer>
      </FooterWrap>
  );
};

export default Footer;