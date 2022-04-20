import { FC } from 'react'
import { CatalogLayout } from '../../layouts'
import { CatalogAddInfoList, CatalogCategoriesList, Navbar } from '../../components'

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
        <CatalogAddInfoList data={Array.from(Array(100))}/>
        <CatalogCategoriesList data={['Coffee', 'Filter',
          'Dripper',
          'Cakes',
          'Cookies']}/>
    </CatalogLayout>
}

export default CatalogPage
