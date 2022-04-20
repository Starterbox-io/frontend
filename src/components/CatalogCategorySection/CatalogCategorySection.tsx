import { FC } from 'react'
import * as S from './_style'

const CatalogCategorySection: FC<any> = ({ data }) => {
  return <S.Container>
        {data.map((v: any, k: number) => {
          return <S.Item key={`category-item-key-${k}`}>
                {k}
            </S.Item>
        })}
    </S.Container>
}

export default CatalogCategorySection
