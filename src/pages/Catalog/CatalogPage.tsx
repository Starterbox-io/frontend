import { FC, useState } from 'react'
import { CatalogLayout } from '../../layouts'
import { Banner, CatalogAddInfoList, CatalogCategoriesList, CatalogCategorySection, Navbar } from '../../components'
import BannerImg from '../../assets/img/banner.jpg'

const CatalogPage: FC = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  return <CatalogLayout
        title={'Bean’s brothers'}
        header={{
          media: {
            type: 'image',
            src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          },
          children: <Navbar/>
        }}>
        <CatalogAddInfoList data={['⏱ 10:00 — 21:00', '🌱 Arabica 100%', '🐶 Pet friendly', '⏱ 10:00 — 21:00', '🌱 Arabica 100%', '🐶 Pet friendly']}/>
        <CatalogCategoriesList
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            data={[
              'Coffee',
              'Cakes'
            ]}/>
        <CatalogCategorySection
            activeCategory={activeCategory}
            data={[
              {
                title: 'Breakfast',
                items: [
                  {
                    title: 'Egg',
                    desc: 'Arabica 100%, milk, sugar,\n' +
                                'vanilla syrup, caramel, and...',
                    price: '$2.99',
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg'
                    }
                  },
                  {
                    title: 'Pizza',
                    desc: 'Arabica 100%, milk, sugar,\n' +
                                'vanilla syrup, caramel, and...',
                    price: '$2.99',
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'
                    }
                  },
                  {
                    title: 'Cake',
                    desc: 'Arabica 100%, milk, sugar,\n' +
                                'vanilla syrup, caramel, and...',
                    price: '$2.99',
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg'
                    }
                  }
                ],
                children: <Banner title={'Banner'} media={{
                  type: 'image',
                  src: BannerImg
                }}/>
              },
              {
                title: 'Cakes',
                items: [
                  {
                    title: 'Cake',
                    desc: 'Arabica 100%, milk, sugar,\n' +
                                'vanilla syrup, caramel, and...',
                    price: '$2.99',
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  },
                  {
                    title: 'Cake',
                    desc: 'Arabica 100%, milk, sugar,\n' +
                                'vanilla syrup, caramel, and...',
                    price: '$2.99',
                    media: {
                      type: 'image',
                      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
                    }
                  },
                  {
                    title: 'Cake',
                    desc: 'Arabica 100%, milk, sugar,\n' +
                                'vanilla syrup, caramel, and...',
                    price: '$2.99',
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
