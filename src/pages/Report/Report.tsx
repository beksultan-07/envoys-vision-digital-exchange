import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'

const TableWrap = styled.div`
    max-width: 100%;
    overflow-x: auto;

    table{
        border: 1px solid #F5F5F5;
        tr{
            display: flex;
        }
        th, td{
            width: 168px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #F5F5F5;
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 16px;
            color: #3F3F3F;
        }
        th{
            flex-direction: column;
            background: #045599;
            color: #fff;
            font-weight: 700;
            span{
                margin-top: 15px;
            }
            :first-child{
                border-radius: 10px 0 0 0;
            }
            :last-child{
                border-radius: 0px 10px 0 0;
            }
        }
        .small-tr{
            border-radius: 0 !important;
            width: calc(168px/2);
            height: calc(100px/2);
        }
    }
`

const TableBtn = styled.button`
    max-width: 380px;
    min-width: 280px;
    background: #F47F1F;
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    padding: 20px;
    margin: 60px 0 0;
    cursor: pointer;
    transition: .3s;
    :hover{
        opacity: .7;
    }
`



const Report:React.FC = () => {
    const [tableInfo, setTableInfo] = React.useState([
        [
            'ОАО «Ками моторс»',
            'KMOT.P',
            'KG0301222517',
            'Привелигированные акции',
            '0',
            '0',
            '650',
            '2512',
            'Нелистинг',
        ],
        [
            'ОАО «Техсервис»',
            'TSVS',
            'KG0101075925',
            'Простые акции',
            '0',
            '0',
            '0',
            '0',
            'Нелистинг',
        ],
        [
            'ОАО «Гарантийный фонд»',
            'GRFD',
            'KG0107216010',
            'Простые акции',
            '0',
            '0',
            '0',
            '0',
            'Нелистинг',
        ],
        [
            'ОАО «Электромонтаж»',
            'ELMJ',
            'KG0103023618',
            'Простые акции',
            '0',
            '0',
            '0',
            '0',
            'Нелистинг',
        ],
        [
            'ОАО «Шатер»',
            'SHTR',
            'KG0101224119',
            'Простые акции',
            '0',
            '0',
            '0',
            '0',
            'Нелистинг',
        ],
        [
            'ОАО «Авторемонтный завод»',
            'ARZD',
            'KG101080420',
            'Простые акции',
            '0',
            '0',
            '0',
            '0',
            'Нелистинг',
        ]
    ]
    )

  return (
        <Container>
            <Flex direction='column' align='center' margin='50px 0'>
                <TableWrap>
                    <table>
                        <tr>
                            <th>Наименование эмитента, общее количество ценных бумаг в выпуске</th>
                            <th>Тикер</th>
                            <th>Государственный регистрационный номер</th>
                            <th>Вид ценной бумаги</th>
                            <th>
                                <span>ASK</span>
                                <tr style={{marginTop: 'auto'}}>
                                    <th className='small-tr'>Количество</th>
                                    <th className='small-tr'>Цена</th>
                                </tr>
                            </th>
                            <th>
                                <span>BID</span>
                                <tr style={{marginTop: 'auto'}}>
                                    <th className='small-tr'>Количество</th>
                                    <th className='small-tr'>Цена</th>
                                </tr>
                            </th>
                            <th>Листинг/нелистинг</th>

                        </tr>
                        {tableInfo.map((element, index) => (
                            <tr key={index}>
                                {element.map((el, i:number) => {
                                    if(i === 4 || i === 5 || i === 6 || i === 7){
                                        return <td key={i} style={{width:'calc(168px/2)'}}>{el}</td>
                                    }
                                    return <td key={i}>{el}</td>
                                }
                                )}
                            </tr>
                        ))}
                    </table>
                </TableWrap>
            </Flex>
        </Container>
  )
}

export default Report
