import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Context/AppContext.jsx'
import UserContext from './Context/UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <UserContext>
    <AppContext>
    <App />
    </AppContext>
    </UserContext>
  </StrictMode>
  </BrowserRouter>,
)
