import { FC } from 'react'
import { CatalogItemLayout } from '../../layouts'
import { ReactComponent as CloseButton } from '../../assets/icons/close.svg'
import * as S from './_style'
import { useNavigate, useParams } from 'react-router-dom'

const CatalogItemPage: FC = () => {
  const navigate = useNavigate()
  const { item } = useParams()
  return <CatalogItemLayout
        title={item?.replace('-', ' ')}
        header={{
          media: {
            type: 'image',
            src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          },
          children: <S.Close onClick={() => navigate(-1)}>
                <CloseButton/>
            </S.Close>
        }}>
        <S.Info>$4.90 / 340 ml</S.Info>
        <S.Desc>
            Arabica 100%, milk, sugar, vanilla syrup, caramel,
            sugar, vanilla syrup, caramel,
        </S.Desc>
        <S.Section>
            <S.SectionTitle>Add specials</S.SectionTitle>
            <S.Item>
                <S.ItemTitle>Coconut milk</S.ItemTitle>
                <S.ItemPrice>+$1.90</S.ItemPrice>
            </S.Item>

            <S.Item>
                <S.ItemTitle>Coconut milk</S.ItemTitle>
                <S.ItemPrice>+$1.90</S.ItemPrice>
            </S.Item>

            <S.Item>
                <S.ItemTitle>Coconut milk</S.ItemTitle>
                <S.ItemPrice>+$1.90</S.ItemPrice>
            </S.Item>
        </S.Section>
    </CatalogItemLayout>
}

export default CatalogItemPage
