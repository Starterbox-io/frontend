import { FC, Fragment } from 'react'
import * as S from './_style'
import { CategoryItemCard } from '../index'
import { useNavigate } from 'react-router-dom'

const CatalogCategorySection: FC<any> = ({ data, activeCategory }) => {
  const navigate = useNavigate()
  return <S.Container>
        {data.map((section: any, k: number) => {
          return <Fragment key={`section-key-${k}`}>
                <S.Category id={`${section.title.toLowerCase()}`}>
                    <S.Title>{section.title}</S.Title>
                    <S.CategoryList>
                    {section.items.map((item: any, key: number) => {
                      return <S.CategoryItem key={`section-item-key-${key}`}
                                               onClick={() => navigate(`/catalog/${item?.title.toLowerCase().replace(' ', '-')}`)}>
                            <CategoryItemCard
                                data={item}/></S.CategoryItem>
                    })}
                    </S.CategoryList>
                </S.Category>
                {section?.children}
            </Fragment>
        })}
    </S.Container>
}

export default CatalogCategorySection
