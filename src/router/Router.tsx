import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { CatalogItemPage, CatalogPage } from '../pages'

export const ROUTER_PATH = {
  root: {
    path: '/',
    element: <div>Home</div>
  },
  catalog: {
    path: '/catalog',
    element: <CatalogPage/>
  },
  catalog_item_info: {
    path: '/catalog/:item',
    element: <CatalogItemPage/>
  }
}

export const Router: FC = () => (
    <Routes>
        {Object.entries(ROUTER_PATH).map(([key, obj]: any) => {
          return <Route path={obj.path} element={obj.element} key={`react-router-key-${key}`}/>
        })}
        <Route path={'*'} element={'404'}/>
    </Routes>
)
