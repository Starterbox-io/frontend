import { FC } from 'react'
import * as S from './_style'
import { Media } from '../index'

const Banner: FC<any> = ({ title, media }) => {
  return <S.Container>
        <S.Title>{title}</S.Title>
        <S.Media>
            <Media {...media}/>
        </S.Media>
    </S.Container>
}
export default Banner
