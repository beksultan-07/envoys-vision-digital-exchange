import React from 'react'
import { Flex } from '../../uikit/uikit'
import { SideBarBtn, SideBarCloseWrap, SideBarFlex, SideBarIcon, SideBarLink, SideBarLinkActive, SideBarTitle, SideBarWrap } from '../listingComponents/SideBar/SideBarSC'
import rIcon from '../../assets/right.svg'
import icon from '../../assets/close.svg'
import { useNavigate, useLocation } from 'react-router-dom'


type Props = {
    changeLP: any;
    activeText:any
}

const SideBarAbout:React.FC<Props> = (props) => {
    const [links, setLinks] = React.useState([
        'Участники',
        'Правила',
        'Законодательство КР',
        'Раскрытия информации',
    ])
    const [sideBarClickIcon, setSideBarClickIcon] = React.useState(false)
    

  return (
    <SideBarWrap style={{borderRight: '1px solid #DADADA'}}>
        <SideBarFlex direction='column' align='flex-start' click={ sideBarClickIcon}>
            <SideBarTitle>
                <SideBarBtn onClick={() => setSideBarClickIcon(val => !val)}>
                        <img src={icon} alt="" />
                    </SideBarBtn>
            </SideBarTitle>
            {links.map((el, index) => {
                    if(el === props.activeText ){
                        return <SideBarLinkActive key={index} onClick={(e) => {
                            props.changeLP(el)
                            setSideBarClickIcon(false)
    
                        } }>{el}</SideBarLinkActive>
                    }
    
                    return <SideBarLink key={index} onClick={(e) => {
                        props.changeLP(el)
                        setSideBarClickIcon(false)         
                    }}>{el}</SideBarLink>
                })}
        </SideBarFlex>
        <SideBarIcon src={rIcon} 
        onClick={() => setSideBarClickIcon(val => !val)}/>

        <SideBarCloseWrap click={sideBarClickIcon} 
        onClick={() => setSideBarClickIcon(val => !val)}></SideBarCloseWrap>
    </SideBarWrap>
  )
}

export default SideBarAbout