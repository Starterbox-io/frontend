import { FC, useMemo } from 'react'
import * as S from './_style'

const Media: FC<any> = ({
  type,
  src,
  desc = ''
}) => {
  const media = useMemo(() => {
    if (type === 'image') {
      return <picture>
                <img src={src} alt={desc}/>
            </picture>
    }
  }, [])
  return <S.Container>
        {media}
    </S.Container>
}
export default Media
