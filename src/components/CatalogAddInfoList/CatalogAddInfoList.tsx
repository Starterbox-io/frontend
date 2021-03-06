import { FC } from 'react'
import * as S from './_style'

const CatalogAddInfoList: FC<any> = ({ data }) => {
  return <S.Container>
        {data.map((v: any, k: number) => {
          return <S.Item key={`category-item-key-${k}`}>
                {v}
            </S.Item>
        })}
    </S.Container>
}

export default CatalogAddInfoList
