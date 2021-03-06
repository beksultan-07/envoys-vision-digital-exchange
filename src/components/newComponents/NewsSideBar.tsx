import React from 'react'
import styled from 'styled-components'
import Vector from '../../assets/Vector.png'
import { Flex } from '../../uikit/uikit'


const NewsBox = styled.div`
  position: relative;
  padding: 24px 0 30px 0;
  border-bottom: 1px solid #DADADA;
`

const NewsText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  max-width: 370px;
  color: #000000;
  @media(max-width: 400px){
    font-size: 18px;
  }
`

const ViewMoreAndData = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #045599;
  margin-top: 14px;
  &:last-child{
    margin-right: 10px;
  }
`

export const ViewMore = styled.button`
    border-style: none;
    color: #045599;
    background: transparent ;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    img{
    margin: 0 0 0 5px;
    }
`

const NewsSideBarWrap = styled.div`
    flex: .5;
    overflow-y: scroll;
    border-right: 1px solid #DADADA;
    height: 80vh;
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      transition: .3s;
      background: #555;
    }
    @media(max-width: 830px){
      flex: none;
      border-bottom: 1px solid #DADADA;
    }
`

type Props = {
    info: any;
    newsClick: any;
}


const NewsSideBar:React.FC<Props> = (props) => {

  function reverseDate(newsDate: string){
    let dateArray = []
    let dateDate = ''
    for(let i=0; i<newsDate.length; i++){
      dateDate += newsDate[i]
      if(newsDate[i] === '-' || i === newsDate.length-1){
        dateArray.push(dateDate)
        dateDate = ''
      }
    }
    dateArray = dateArray.reverse()
    let result = dateArray[0]+'-'+dateArray[1].slice(0, 2)+'-'+dateArray[2].slice(0, 4)     
    return result
  }

  return (
    <NewsSideBarWrap >
        <Flex direction='column-reverse' justify='flex-end'>
          {props.info.map((el:any, index:number) => {
              return <NewsBox key={index}>
                      <NewsText>
                          {el.title}
                      </NewsText>
                      <ViewMoreAndData>
                          <span>{reverseDate(el.date)}</span>
                          <ViewMore onClick={() => props.newsClick(el.title)}>?????????????????? <img src={Vector} alt=""/></ViewMore>
                      </ViewMoreAndData>
                  </NewsBox>
          })}      
              
        </Flex>
    </NewsSideBarWrap>
  )
}

export default NewsSideBar