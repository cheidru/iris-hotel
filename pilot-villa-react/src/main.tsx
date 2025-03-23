import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // https://ru.stackoverflow.com/questions/1539856/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD-%D0%BF%D1%80%D0%B8-deploy-vite-react-%D0%BD%D0%B0-gh-pages
  // <BrowserRouter basename={import.meta.env.NODE_ENV === 'production' ? '/iris-hotel' : '/'}>
  <BrowserRouter basename='/iris-hotel'>
    <App />
  </BrowserRouter>
)
