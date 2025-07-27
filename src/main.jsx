import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/Header'
import Body from './component/body'
import Footer from './component/footer'

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Body />
        <Footer/>
    </>
)
