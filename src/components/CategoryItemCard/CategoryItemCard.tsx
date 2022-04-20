import { FC } from 'react'
import * as S from './_style'
import { Media } from '../index'

const CategoryItemCard: FC<any> = ({ data }) => {
  const { media, title, desc, price } = data
  return <S.Container>
        <S.Media>
            <Media {...media}/>
        </S.Media>
        <S.Info>
            <S.InfoGroup>
                <S.Title>{title}</S.Title>
                <S.Desc>{desc}</S.Desc>
            </S.InfoGroup>
            <S.Price>{price}</S.Price>
        </S.Info>
    </S.Container>
}

export default CategoryItemCard
