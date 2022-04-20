import { FC } from 'react'
import * as S from './_style'
import { CategoryItemCard } from '../index'

const CatalogCategorySection: FC<any> = ({ data, scrollTo }) => {
  return <S.Container>
        {data.map((section: any, k: number) => {
          return <S.Category key={`section-key-${k}`} id={`${section.title.toLowerCase()}`}>
                <S.Title>{section.title}</S.Title>
                {section.items.map((item: any, key: number) => {
                  return <S.CategoryItem key={`section-item-key-${key}`}>
                        <CategoryItemCard
                            data={item}/></S.CategoryItem>
                })}
            </S.Category>
        })}
    </S.Container>
}

export default CatalogCategorySection
