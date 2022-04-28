import React from 'react'
import styled from 'styled-components';
import { Flex } from '../../uikit/uikit';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const NewsPageWrap = styled(Flex)`
    overflow-y: scroll; 
    overflow-x: hidden; 
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
      height: 100%;
      overflow-y: hidden;
      margin: 0; 
    }
`


const NewsTitle = styled.h1`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #045599;
    max-width: 750px;
    margin: 60px 0;

`

const NewsText = styled.p`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #3F3F3F;
    margin: 20px 0 0;
    max-width: 750px;
`

const NewsLink = styled.a`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #045599;
    margin-top: 20px;
    max-width: 750px;

`

type Props = {
    name: string;
    info: any;
}

const NewsPage:React.FC<Props> = (props) => {
  const [newsImg, setNewsImg] = React.useState('')
  
  function checkText(text: string){
    let texts = []
    let lineText = ''
    for(let i=0; i < text.length; i++){
      lineText += text[i]
      if(text[i] === "\n"){
        texts.push(lineText)
        lineText = ''
      }
    }
    return texts.map((text, i) => {
      if(text === '\n'){
        return <br key={i}/>
      }
      return <NewsText key={i}>{text.slice(0, text.length-2)}</NewsText>
    })
  }
  
  React.useEffect(() => {
    setNewsImg('')
    const storage = getStorage();
    getDownloadURL(ref(storage, `gs://envoys-vision-news.appspot.com/news/${props.name}.jpg`))
      .then((url) => {
        setNewsImg(url)
      })
      .catch((error) => {
        setNewsImg('')
      });
  }, [props.name])

  

  return (
    <NewsPageWrap direction='column' margin='0 60px' flex={1}>
        <NewsTitle>{props.name}</NewsTitle>
        {props.info.map((el:any, index:number) => {
            if(el.title === props.name){
                return <Flex direction='column' key={index}>
                  <div style={{maxWidth: '750px', height: newsImg?'430px':'', margin: '0 0 20px'}}>
                    <img src={newsImg} alt="" style={{width: '100%'}}/>
                  </div>
                  {checkText(el.text)}
                  <NewsLink href={el.link} target='_blank'>Источник: {el.link}</NewsLink>
                </Flex>
            }
        })}
    </NewsPageWrap>
  )
}

export default NewsPage