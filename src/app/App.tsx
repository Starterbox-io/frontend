import React, { FC } from 'react'
import 'normalize.css'
import '../style/global.style.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../router/Router'
import { HelmetProvider } from 'react-helmet-async'

const App: FC = () => {
  return <HelmetProvider>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </HelmetProvider>
}

export default App
