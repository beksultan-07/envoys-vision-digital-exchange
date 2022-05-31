import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'
import { AboutUsLink } from './aboutUsSC'


const AboutWrap = styled(Flex)`
  flex: 1;
    @media(max-width: 760px){
      margin: 30px 0 0 0;
    }
`

const DisclosuresA:React.FC = () => {
  return (
    <AboutWrap direction='column' margin='20px'>
        <AboutUsLink href={require('./DisclosuresDoc/277 500 000.pdf')} target="_blank">Отчет за 3 квартал открытого общества ОАО "Eнвойс Вижион Диджитал Эксчейндж"</AboutUsLink>
        <AboutUsLink href={require('./DisclosuresDoc/5 277 500 000.pdf')} target="_blank">Отчет за 4 квартал открытого акционерного общества ОАО "Eнвойс Вижион Диджитал Эксчейндж"</AboutUsLink>

        <AboutUsLink href={require('./DisclosuresDoc/Отчет_ОАО_ЕВДЭ_2021_Краткое_содеражение_.pdf')} target="_blank">Отчет ОАО ЕВДЭ 2021</AboutUsLink>


    </AboutWrap>
  )
}

export default DisclosuresA