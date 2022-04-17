import { FC, PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'

type TMainLayout = PropsWithChildren<{
    head?: {
        title?: string
    }
}>

const MainLayout: FC<TMainLayout> = ({
  children, head = {
    title: 'Starterbox'
  }
}) => {
  const { title } = head
  return <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div>{children}</div>
    </>
}

export default MainLayout
