import { FC, PropsWithChildren, ReactNode, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import * as S from './_style'

type TCatalogLayout = PropsWithChildren<{
    title?: string
    header?: {
        media?: {
            type: 'image' | 'video'
            src: ReactNode
        }
        children: ReactNode
    }
}>

const CatalogItemLayout: FC<TCatalogLayout> = ({
  title,
  header,
  children
}) => {
  const headerMedia = useMemo(() => {
    const { media }: any = header
    if (media?.type === 'image') {
      return <picture>
                <source srcSet={media?.type?.src}
                        media="(min-width: 800px)"/>
                <img src={media?.src} alt={title}/>
            </picture>
    } else if (media?.type === 'video') {
      return <>video</>
    } else {
      return <>set media type</>
    }
  }, [])

  return <S.Container>
        <Helmet>
            <title>Starterbox | {title}</title>
        </Helmet>
        {header && <S.Header>
            <S.HeaderContent>{header?.children}</S.HeaderContent>
            {header?.media && <S.Media>{headerMedia}</S.Media>}
        </S.Header>}
        <S.Content>
            {title && <S.Title>{title}</S.Title>}
            {children}
        </S.Content>
    </S.Container>
}

export default CatalogItemLayout
