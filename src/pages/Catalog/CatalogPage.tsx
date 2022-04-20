import { FC } from 'react'
import { CatalogLayout } from '../../layouts'
import { Navbar } from '../../components'

const CatalogPage: FC = () => {
  return <CatalogLayout
        title={'Bean’s brothers'}
        header={{
          media: {
            type: 'image',
            src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          },
          children: <Navbar/>
        }}>
        content
    </CatalogLayout>
}

export default CatalogPage
