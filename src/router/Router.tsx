import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import CatalogPage from '../pages/Catalog/CatalogPage'

export const ROUTER_PATH = {
  root: {
    path: '/',
    element: <CatalogPage/>
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
