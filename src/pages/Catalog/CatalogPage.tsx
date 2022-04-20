import { FC } from 'react'
import { CatalogLayout } from '../../layouts'
import { CatalogAddInfoList, CatalogCategoriesList, Navbar } from '../../components'
import CatalogCategorySection from '../../components/CatalogCategorySection/CatalogCategorySection'

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
        <CatalogCategorySection
            data={[
              {
                title: 'Coffee',
                items: [
                  {
                    title: 'Capuchino',
                    desc: 'Capuchino description',
                    price: 2,
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  },
                  {
                    title: 'Capuchino',
                    desc: 'Capuchino description',
                    price: 2,
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  },
                  {
                    title: 'Capuchino',
                    desc: 'Capuchino description',
                    price: 2,
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  }
                ]
              },
              {
                title: 'Cake',
                items: [
                  {
                    title: 'Cake',
                    desc: 'Cake description',
                    price: 2,
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  },
                  {
                    title: 'Cake',
                    desc: 'Cake description',
                    price: 2,
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  },
                  {
                    title: 'Cake',
                    desc: 'Cake description',
                    price: 2,
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  }
                ]
              }
            ]}
        />
    </CatalogLayout>
}

export default CatalogPage
