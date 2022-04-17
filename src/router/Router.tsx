import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'

export const ROUTER_PATH = {
  root: '/',
  shop: '/shop'
}

export const Router: FC = () => (
    <Routes>
        {Object.entries(ROUTER_PATH).map(([value, path]: any) => {
          return <Route path={path} element={<div>{value}</div>} key={`react-router-key-${path}`}/>
        })}
        <Route path={'*'} element={'404'}/>
    </Routes>
)
