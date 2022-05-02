import React, { FC } from 'react'
import 'normalize.css'
import '../style/global.style.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../router/Router'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from '../context/Modal/ModalContext'

const App: FC = () => {
  return <HelmetProvider>
        <BrowserRouter>
            <ModalProvider>
                <Router/>
            </ModalProvider>
        </BrowserRouter>
    </HelmetProvider>
}

export default App
