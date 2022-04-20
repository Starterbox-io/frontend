import { FC } from 'react'
import * as S from './_style'
import cn from 'classnames'

const CatalogCategoriesList: FC<any> = ({ data, activeCategory, setActiveCategory }) => {
  return <S.Container className={'category-list'}>
        {data.map((v: any, k: number) => {
          return <S.Item key={`category-item-key-${k}`} className={cn({
            '--active': k === activeCategory
          })} onClick={() => setActiveCategory(k)}>
                {v}
            </S.Item>
        })}
    </S.Container>
}

export default CatalogCategoriesList
