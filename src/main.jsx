import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Global } from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Global>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Global>
)
