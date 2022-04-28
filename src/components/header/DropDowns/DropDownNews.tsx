import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { DropDownInside, DropDownLink, HeaderDropDownWrap} from '../hedearStyledComponents'

const DropDownNews:React.FC = () => {
    const [links, setLinks] = React.useState([
        'Новости',
        'Дивидендный календарь ',
        'Календарь заработка',
        'Торговый календарь'
    ])
    const [linksEn, setLinksEn] = React.useState([
        'News',
        'Dividend calendar',
        'Earning calendar',
        'Trading calendar'
    ])

    const navigate = useNavigate()

    return <HeaderDropDownWrap>
    
            <DropDownInside>
                <Flex direction='column'>
                    {links.map((el, index) => {
                        return <DropDownLink
                            onClick={ () => {
                                linksEn[index]==='News'?navigate('news&analytics'):navigate(linksEn[index].toLowerCase().replace(' ', ''))
                            }}
                            key={index}>
                        {el}
                    </DropDownLink>
                    })}
                </Flex>
            </DropDownInside>
    </HeaderDropDownWrap>
}

export default DropDownNews